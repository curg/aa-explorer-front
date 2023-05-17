"use client"
import React, { useEffect, useState } from 'react'
import Head from '@/src/components/etc/Head'
import SearchBar from '@/src/components/common/searchBar/SearchBar'
import Button from '@/src/components/common/button/Button'
import TxsTable from '@/src/components/common/table/TxsTable'
import { useQuery } from '@apollo/client'
import { GET_TXS } from '@/src/core/apollo/query'
import { Tx } from '@/src/types/Tx'

const Page = () => {
  const { data, loading, error } = useQuery(GET_TXS);
  const [txs, setTxs] = useState<Tx[] | undefined>(undefined);
  useEffect(() => {
    setTxs(data && data.txs);
  }, [data])
  return (
    <>
      <Head title='AA | Transactions' />
      <main className='w-full h-screen bg-black'>
        <SearchBar className='mx-auto mb-12' />
        <div className='mx-auto min-h-fit bg-primaryBg rounded-xl'>
          <div className='text-white py-12 px-12 flex justify-between'>
            <h2 className='font-semibold text-xl'>All Transactions</h2>
            <div className='flex text-sm items-center'>
              <Button className='w-12 h-8' title="First" />
              <Button className='w-12 h-8' title="left" imagePath='/assets/leftArrow.svg' size='w-8 h-4' />
              <div className='h-8 flex justify-center items-center bg-buttonBg rounded-md px-2 mr-2'>page 1 of 0</div>
              <Button className='w-12 h-8' title="right" imagePath='/assets/rightArrow.svg' size='w-8 h-4' />
              <Button className='w-12 h-8' title="Last" />
            </div>
          </div>
          <div className='mx-12 text-sm pb-20'>
            <TxsTable
              txs={txs}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page