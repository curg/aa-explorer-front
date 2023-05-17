"use client"
import React from 'react'
import Link from 'next/link'
import { parseText } from '@/src/utils/parseText'
import CopyButton from '../button/CopyButton'
import { Block } from '@/src/types/Block'

type Prop = {
  key: number;
  block: Block
}

const BlockRow = ({ block }: Prop ) => {
  return (
    <tr className='h-12'>
      <td>
        <Link 
          href={`/block/${block.id}`}
          className='text-[#7560EF] hover:text-[#9A8AF9] duration-100'>
          {block.id}
        </Link>
      </td>
      <td>{block.age}</td>
      <td>{block.txn}</td>
      <td>
        {parseText(block.hash, 35)}              
        <CopyButton text={block.hash} />
      </td>
      <td>{block.value} GEN</td>
    </tr>
  )
}

export default BlockRow