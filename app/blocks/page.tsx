"use client"
import React, { useEffect, useState } from 'react'
import Head from '@/src/components/etc/Head'
import SearchBar from '@/src/components/common/searchBar/SearchBar'
import Button from '@/src/components/common/button/Button'
import BlockTable from '@/src/components/common/table/BlockTable'
import { GET_BLOCKS } from '@/src/core/apollo/query'
import { useQuery } from "@apollo/client";
import { Block } from '@/src/types/Block'

const Page = () => {
  const { data, loading, error } = useQuery(GET_BLOCKS);
  const [blocks, setBlocks] = useState<Block[] | undefined>(undefined);
  useEffect(() => {
    console.log({
      data,
      loading,
      error
    })
    setBlocks(data && data.blocks);
  }, [data])
  return (
    <>
      <Head title='AA | Blocks' />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12' />
        <div className='mx-auto min-h-fit bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex justify-between'>
            <h2 className='font-semibold text-xl'>All Blocks</h2>
            <div className='flex text-sm items-center'>
              <Button className='w-12 h-8' title="First" />
              <Button className='w-12 h-8' title="left" imagePath='/assets/leftArrow.svg' size='w-8 h-4' />
              <div className='h-8 flex justify-center items-center bg-buttonBg rounded-md px-2 mr-2'>page 1 of 0</div>
              <Button className='w-12 h-8' title="right" imagePath='/assets/rightArrow.svg' size='w-8 h-4' />
              <Button className='w-12 h-8' title="Last" />
            </div>
          </div>
          <div className='mx-12 text-sm pb-20'>
            <BlockTable
              blocks={blocks}
              loading={loading}
            />                
          </div>
        </div>
      </main>
    </>
  )
}

export default Page