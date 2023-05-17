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

export const GET_TXS = gql`
  query GetTxs {
    txs {
      block,
      txnHash,
      age,
      from,
      to,
      value
    }
  }
`