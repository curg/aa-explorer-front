import React from 'react'
import Head from '@/src/components/etc/Head';
import SearchBar from '@/src/components/common/searchBar/SearchBar';

const Page = () => {
  return (
    <>
      <Head />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12 w-4/5' />
        <div className='mx-auto min-h-fit	w-4/5 bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex items-center'>
            <h2 className='font-semibold text-xl'>Transaction Details</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page;