import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { NextPageContext } from "next";
import { withApollo as createWithApollo } from 'next-apollo';

import type { PaginatedComments, TypedTypePolicies } from "../generated/graphql";

const typePolicies: TypedTypePolicies = {};

const createClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    cache: new InMemoryCache({ typePolicies }),
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) ?? "",
    },
    uri: String(process.env.URI),
  });


export const withApollo = createWithApollo(createClient);