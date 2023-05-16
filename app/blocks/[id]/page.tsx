import React from 'react'
import Head from '@/src/components/etc/Head';
import SearchBar from '@/src/components/common/searchBar/SearchBar';
import Button from '@/src/components/common/button/Button';

const Page = () => {
  return (
    <>
      <Head />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12 w-4/5' />
        <div className='mx-auto min-h-fit	w-4/5 bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex items-center'>
            <h2 className='font-semibold text-xl'>Block Number</h2>
            <h4 className='font-semibold ml-2'>#23162577</h4>
              <Button className='ml-2' title="left" imagePath='/assets/leftArrow.svg' imageWidth={8} imageHeight={8} />
              <Button title="right" imagePath='/assets/rightArrow.svg' imageWidth={8} imageHeight={8} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page;