import React from 'react'
import Link from 'next/link'
import { parseText } from '@/library/parseText'
import CopyButton from '../button/CopyButton'

type Props = {
  hash: string;
}

const BlockRow = ({ hash }: Props ) => {
  return (
    <tr>
      <td>
        <Link 
          href={'/blocks/23162577'}
        >
          23162577
        </Link>
      </td>
      <td>2 weeks ago</td>
      <td>0</td>
      <td>
        {parseText(hash, 35)}              
        <CopyButton text={hash} />
      </td>
      <td>0 GEN</td>
    </tr>
  )
}

export default BlockRow