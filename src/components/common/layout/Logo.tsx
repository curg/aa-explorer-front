import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href={`/`}
      className='text-white font-semibold text-2xl'>
      AA Rounge
    </Link>
  )
}

export default Logo