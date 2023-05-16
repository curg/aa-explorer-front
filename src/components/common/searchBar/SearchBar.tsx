"use client"

import { SearchIcon } from '../../icons';
import React from 'react'

type Prop = {
  className: string;
}

const SearchBar = ({ className }: Prop) => {
  return (
    <div className={`${className} relative`}>
      <input
        type="text"
        placeholder='Search by transaction hash, block number or account hash' 
        className="w-full py-5 pl-2 bg-primaryBg outline-none text-white rounded-xl" />
      <button className='absolute top-0 right-0 translate-y-1/2 -translate-x-1/2'>
        <SearchIcon width={30} height={30} />
      </button>
    </div>
  )
}

export default SearchBar