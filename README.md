# Js Utils. 
## Some common Utils.


- [1. JS-Utils](#1-js-utils)
  - [1.1. General Utils](#11-general-utils)
    - [1.1.1. Format To Dollar](#111-format-to-dollar)
  - [1.2. React Utils](#12-react-utils)
    - [1.2.1. Apollo Client HOC to enable support for SSR and SSG in Next.Js based apps.](#121-apollo-client-hoc-to-enable-support-for-ssr-and-ssg-in-nextjs-based-apps)

# 1. General Utils

## 1.1. [Format To Dollar]('./../General/formatToDollar.ts')

> Using Intl.NumberFormat API to format numbers as dollars $ in Javascript. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#Parameters)

```ts
formatToDollar(873) // "$873.00"

formatToDollar(1634) // "$1,634.00"

formatToDollar(1523.65) // "$1,523.65"

formatToDollar(1893042.3498) // "$1,893,042.35"
```



# 2. React Utils

## 2.1. [Apollo Client HOC to enable support for SSR and SSG in Next.Js based apps]('../../React/withApollo.ts').

> Can be used to enable/disable SSR when needed. Adds NextPageContext support.
> Needs [next-apollo](https://github.com/adamsoffer/next-apollo/) and [@apollo/client](https://github.com/apollographql/apollo-client/)

```ts
export default withApollo({ ssr: false })(Index)
```
