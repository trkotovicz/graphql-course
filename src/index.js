import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello GarphQL';
      },
      hi: () => {
        return ' Hi again';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
