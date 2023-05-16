import React from 'react'
import Head from '@/src/components/etc/Head';
import SearchBar from '@/src/components/common/searchBar/SearchBar';

const Page = () => {
  return (
    <>
      <Head title='AA | Address' />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12' />
        <div className='mx-auto min-h-fit bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex items-center'>
            <h2 className='font-semibold text-xl'>Overview</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page