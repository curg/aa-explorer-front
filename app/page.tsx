"use client";
import React from "react";
import Head from "@/src/components/etc/Head";
import SearchBar from "@/src/components/common/searchBar/SearchBar";
import { GET_BLOCKS } from "@/src/core/apollo/query";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_BLOCKS);
  console.log({
    data,
    loading,
    error
  })
  return (
    <>
      <Head title='AA | Home' />
      <main className='w-full h-screen bg-black flex justify-center items-center'>
        <SearchBar className='w-1/2' />
      </main>
   </>
  )

}
