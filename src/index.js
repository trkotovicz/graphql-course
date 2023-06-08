import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '1husahia72-hasuih448',
      name: () => 'Thais Kotovicz',
      age: () => 29,
      average: () => 55.43,
      married: () => true,
      arrayString: () => ['a', 'b', 'c'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
