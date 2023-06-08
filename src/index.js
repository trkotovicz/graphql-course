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

      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
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

      user: () => {
        return { id: 'kduj12-jdh375', userName: 'thaiskotovicz' };
      },

      users: () => {
        return [
          { id: '1', userName: 'thaiskotovicz_01' },
          { id: '2', userName: 'thaiskotovicz_02' },
          { id: '3', userName: 'thaiskotovicz_03' },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
