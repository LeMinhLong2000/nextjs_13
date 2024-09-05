'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  const url = "http://localhost:8000/blogs"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    }

    fetchData();
  }, [])
  return (
    <div>
      <ul>
        <li><Link href={"/facebook"}>Facebook</Link></li>
        <li><Link href={"/youtube"}>Youtube</Link></li>
        <li><Link href={"/tiktok"}>Tiktok</Link></li>
      </ul>
    </div>
  )
}
