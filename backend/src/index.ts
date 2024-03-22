
import { ApolloServer } from '@apollo/server';

import { startStandaloneServer } from '@apollo/server/standalone';

import { readFileSync } from 'fs';
import gql from "graphql-tag";


const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const typeDefs = gql(

    readFileSync("src/schema/typeDefs.graphql", {

      encoding: "utf-8",

    })

  );

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {

  listen: { port: 4000 },

});


console.log(`🚀  Server ready at: ${url}`);
