"use client";
import AppTable from "@/components/app.table";
import useSWR from "swr";
import { useEffect } from "react";

const BlogsPage = () => {
  // khi load trang mới gọi lại api
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3">
      {/* truyền data từ cha sang con */}
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)}></AppTable>
    </div>
  );
};

export default BlogsPage;
