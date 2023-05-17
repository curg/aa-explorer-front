"use client"
import React from 'react'
import Link from 'next/link'
import { parseText } from '@/src/utils/parseText'
import CopyButton from '../button/CopyButton'
import { Tx } from '@/src/types/Tx'

type Props = {
  key: number;
  tx: Tx;
}

const TxsRow = ({ tx }: Props) => {
  return (
    <tr className='h-12'>
      <td>
        <Link href={`/txs/${tx.txnHash}`}>
          {parseText(tx.txnHash, 15)}
        </Link>
        <CopyButton text={tx.txnHash} />
      </td>
      <td>
        <Link 
          href={`/block/${tx.block}`}
          className='text-[#7560EF] hover:text-[#9A8AF9] duration-100'>
          {tx.block}
        </Link>
      </td>
      <td>{tx.age}</td>
      <td>
        <Link href={`/address/${tx.from}`}>
          {parseText(tx.from, 15)}
        </Link>
        <CopyButton text={tx.from} />            
      </td>
      <td>
        <Link href={`/address/${tx.to}`}>
          {parseText(tx.to, 15)}
        </Link>            
        <CopyButton text={tx.to} />
      </td>
      <td>{tx.value}</td>
    </tr>
  )
}

export default TxsRow