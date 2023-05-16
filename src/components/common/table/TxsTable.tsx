import React from 'react'
import TxsRow from './TxsRow'

const TxsTable = () => {
  const txInfo = {
    txHash: '0x8bed9deabee03343a1c516c5c74cf088957960f8aab5499192ec4907a845a7a4',
    addressFrom: '0xb7acf971835b8b58919d65b6a1f481b204303bf9',
    addressTo: '0x0ecbdf8477db855e38a5fde37aeb9f3a951d72dd'
  }
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
      <tbody className='h-12 bg-primary text-center text-white'>
        <TxsRow txHash={txInfo.txHash} addressFrom={txInfo.addressFrom} addressTo={txInfo.addressTo} />
      </tbody>
    </table>
  )
}

export default TxsTable