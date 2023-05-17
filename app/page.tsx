"use client";
import React from "react";
import Head from "@/src/components/etc/Head";
import SearchBar from "@/src/components/common/searchBar/SearchBar";

export default function Home() {
  return (
    <>
      <Head title='AA | Home' />
      <main className='h-screen flex justify-center items-center'>
        <SearchBar className='w-1/2' />
      </main>
   </>
  )

}
