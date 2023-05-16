import React from 'react'
import Head from '@/src/components/etc/Head'
import SearchBar from '@/src/components/common/searchBar/SearchBar'
import Button from '@/src/components/common/button/Button'
import BlockTable from '@/src/components/common/table/BlockTable'

const Page = () => {
  return (
    <>
      <Head title='AA | Blocks' />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12 w-4/5' />
        <div className='mx-auto min-h-fit	w-4/5 bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex justify-between'>
            <h2 className='font-semibold text-xl'>All Blocks</h2>
            <div className='flex text-sm items-center'>
              <Button className='' title="First" />
              <Button className='' title="left" imagePath='/assets/leftArrow.svg' imageWidth={8} imageHeight={8} />
              <div className='h-8 flex justify-center items-center bg-buttonBg rounded-md px-2 mr-2'>page 1 of 0</div>
              <Button className='' title="right" imagePath='/assets/rightArrow.svg' imageWidth={8} imageHeight={8} />
              <Button className='' title="Last" />
            </div>
          </div>
          <div className='mx-12 text-sm'>
            <BlockTable />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page