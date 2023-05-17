"use client"
import React from 'react'
import TxsRow from './TxsRow'
import { Tx } from '@/src/types/Tx'

type Prop = {
  txs: Tx[] | undefined;
}

const TxsTable = ({ txs }: Prop) => {
  return (
    <table className='w-full border-collapse border-spacing-0 rounded-t-2xl overflow-hidden'>
      <thead className='h-12 text-white bg-buttonBg'>
        <tr>
          <th>Txn Hash</th>
          <th>Block</th>
          <th>Age</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className='h-40 bg-primary text-center text-white'>
        {txs?.map((tx) => {
          return (
            <TxsRow
              key={tx.block}
              tx={tx}
            />
          )})}   
      </tbody>
    </table>
  )
}

export default TxsTable