'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import useSWR from 'swr'
import AppTable from '@/components/app.table';

export default function Home() {
  // khi load trang mới gọi lại api 
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  
  if(!data){
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>{data?.length}</div>
      <ul>
        <li><Link href={"/facebook"}>Facebook</Link></li>
        <li><Link href={"/youtube"}>Youtube</Link></li>
        <li><Link href={"/tiktok"}>Tiktok</Link></li>
      </ul>
      
      {/* truyền data từ cha sang con */}
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} ></AppTable>
    </div>
  )
}
