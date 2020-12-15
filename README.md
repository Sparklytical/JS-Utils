# Js Utils.
## Some common Utils.


- [Js Utils.](#js-utils)
  - [Some common Utils.](#some-common-utils)
- [1. General Utils](#1-general-utils)
  - [1.1. Format To Dollar](#11-format-to-dollar)
  - [1.2. Email Validator](#12-email-validator)
- [2. React Utils](#2-react-utils)
  - [2.1. Apollo Client HOC to enable support for SSR and SSG in Next.Js based apps.](#21-apollo-client-hoc-to-enable-support-for-ssr-and-ssg-in-nextjs-based-apps)
  - [2.2. Firebase Auth Context with easy custom Hook](#22-firebase-auth-context-with-easy-custom-hook)

# 1. General Utils

## 1.1. [Format To Dollar]('./../General/formatToDollar.ts')

> Using Intl.NumberFormat API to format numbers as dollars $ in Javascript. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#Parameters)

```ts
formatToDollar(873) // "$873.00"

formatToDollar(1634) // "$1,634.00"

formatToDollar(1523.65) // "$1,523.65"

formatToDollar(1893042.3498) // "$1,893,042.35"
```

## 1.2. [Email Validator]('./../General/emailValidator.ts')

> Email Address Regular Expression That 99.99% Works. From [here](https://emailregex.com/)

```ts
validateEmail(options.usernameOrEmail) ? {'Its an email'}: {'not an email'}
```


# 2. React Utils

## 2.1. [Apollo Client HOC to enable support for SSR and SSG in Next.Js based apps]('../../React/withApollo.ts').

> Can be used to enable/disable SSR when needed. Adds NextPageContext support.
> Needs [next-apollo](https://github.com/adamsoffer/next-apollo/) and [@apollo/client](https://github.com/apollographql/apollo-client/)

```ts
export default withApollo({ ssr: false })(Index)
```

## 2.2. [Firebase Auth Context with easy custom Hook]('../../React/firebaseAuth.ts')

> Can be customized as necessary to enable custom providers.
> Provides a easy hook that can be accessed to use functions.
> Provides a global Context
```ts
<ProvideAuth>
    <App />
</ProvideAuth>
```

```ts
const auth = useAuth();
<button onClick={()=>auth.signout()}>Sign Out</button>
```