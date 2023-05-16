import React from 'react'
import BlockRow from './BlockRow';

const BlockTable = () => {
  const hash = "0x02a3e1469eb447b9f8038c041f333dd5f56d288e04b8aa1fd09b1433e939d510";
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
      <tbody className='h-12 bg-primary text-center text-white'>
        <BlockRow hash={hash} />
      </tbody>
    </table>
  )
}

export default BlockTable