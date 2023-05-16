import React from 'react'
import Link from 'next/link'
import { parseText } from '@/library/parseText'
import CopyButton from '../button/CopyButton'

type Props = {
  txHash: string;
  addressFrom: string;
  addressTo: string;
}

const TxsRow = ({ txHash, addressFrom, addressTo }: Props) => {
  return (
    <tr>
      <td>
        <Link href={`/txs/${txHash}`}>
          {parseText(txHash, 15)}
        </Link>
        <CopyButton text={txHash} />
      </td>
      <td>19549717</td>
      <td>1 month ago</td>
      <td>
        <Link href={`/address/${addressFrom}`}>
          {parseText(addressFrom, 15)}
        </Link>
        <CopyButton text={addressFrom} />            
      </td>
      <td>
        <Link href={`/address/${addressTo}`}>
          {parseText(addressTo, 15)}
        </Link>            
        <CopyButton text={addressTo} />
      </td>
      <td>0 GEN</td>
    </tr>
  )
}

export default TxsRow