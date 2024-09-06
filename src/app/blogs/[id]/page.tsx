"use client";
import AppTable from "@/components/app.table";
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  return <div className="mt-3">ViewDetailBlog {params.id}</div>;
};

export default ViewDetailBlog;
