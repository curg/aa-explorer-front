import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='text-lg text-white font-semibold'>
      <Link 
        href={`/`}
        className='mr-8'>
        Home
      </Link>
      <Link 
        href={'/blocks'}
        className='mr-8'>
        Blocks
      </Link>
      <Link href={'/txs'}>
        Txs
      </Link>
    </div>
  )
}

export default Navigation