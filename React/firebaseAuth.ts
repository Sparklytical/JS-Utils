import {useState, useEffect, useContext, createContext} from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase/app';
import 'firebase/auth';

// This will only intialize app if it's already not initialized.
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AAAAAAAA',
    appDomain: 'A.com'
    // Rest values like database etc
  });
}

const authContext = createContext();

/**
 * This function will create a context that you need to wrap your main component with.
 * <AuthProvider>
        <App />
    </AuthProvider>
*/

export function AuthProvider({children}) {
    const auth = useAuthProvider();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

/*
This  will create a custom hook that can be used to access functions listed below in useProvideAuth like signin,signout

const auth = useAuth();

<button onClick={()=>auth.signout()}>Sign Out</button>
*/

export const useAuth = () => {
    return useContext(authContext);
};

function useAuthProvider(): {
  user: any;
  signin: (email: string, password: string) => any;
  signup: (email: string, password: string) => any;
  signout: () => any;
  sendPasswordResetEmail: (email: string) => any;
  confirmPasswordReset: (password: string, code: string) => any;
}  {
    const [user, setUser] = useState(null);

    const signin = (email:string, password:string) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signup = (email:string, password:string) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    const sendPasswordResetEmail = (email:string) => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    const confirmPasswordReset = (password:string, code:string) => {
        const resetCode = code || getFromQueryString('oobCode');

        return firebase
            .auth()
            .confirmPasswordReset(resetCode, password)
            .then(() => {
                return true;
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
};
