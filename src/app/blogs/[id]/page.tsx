"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  // khi load trang mới gọi lại api
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
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
      <div>
        <Link href="/blogs">Go back</Link>
      </div>

      <Card className="text-center">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          {/* <Card.Title>{data?.title}</Card.Title> */}
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-mated">Author: {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
