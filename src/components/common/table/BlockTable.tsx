"use client"
import React from 'react'
import BlockRow from './BlockRow';
import { Block } from '@/src/types/Block';

type Prop = {
  blocks: Block[] | undefined;
  loading: boolean;
}

const BlockTable = ({ blocks, loading }: Prop) => {
  return (
    <table className='w-full border-collapse border-spacing-0 rounded-t-2xl overflow-hidden'>
      <thead className='h-12 text-white bg-buttonBg'>
        <tr>
          <th>Block</th>
          <th>Age</th>
          <th>Txn</th>
          <th>Hash</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className='h-40 bg-primary text-center text-white'>
        {blocks?.map((block) => {
          return (
              <BlockRow 
                key={block.id}
                block={block}
              />
            )})}
      </tbody>
    </table>
  )
}

export default BlockTable