"use client";

import { GET_BLOCKS } from "@/src/core/apollo/query";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_BLOCKS);

  console.log("data", data.blocks);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return <div>home</div>;
}
