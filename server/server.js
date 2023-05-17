import { ApolloServer, gql } from "apollo-server";
import { blocks, txs } from "./database.js";

const typeDefs = gql`
  type Block {
    id: ID!
    age: Int
    txn: Int
    hash: String!
    value: Float
  }

  type Txs {
    block: ID!
    txnHash: String!
    age: Int
    from: String!
    to: String!
    value: Float
  }

  type Query {
    blocks: [Block]
    txs: [Txs]
  }
`;

const resolvers = {
  Query: {
    blocks() {
      return blocks;
    },
    txs() {
      return txs;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
