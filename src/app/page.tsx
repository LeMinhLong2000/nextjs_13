import Link from "next/link";
// Metadata chỉ dùng cho trang ko có 'use client'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home page",
  description: "Home page",
};
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
