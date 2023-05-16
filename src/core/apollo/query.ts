import { gql } from "@apollo/client";

export const GET_BLOCKS = gql`
  query GetBlocks {
    blocks {
      id
      age
      txn
      hash
      value
    }
  }
`;
