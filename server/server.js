import { ApolloServer, gql } from "apollo-server";
import { blocks } from "./database.js";

const typeDefs = gql`
  type Block {
    id: ID!
    age: Int
    txn: Int
    hash: String!
    value: Float
  }

  type Query {
    blocks: [Block]
  }
`;

const resolvers = {
  Query: {
    blocks() {
      return blocks;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
