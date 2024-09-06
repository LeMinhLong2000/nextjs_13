"use client";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { use, useState } from "react";
import CreateModal from "./create.modal";
import UpdateModal from "./update.modal";
import Link from "next/link";
import { toast } from "react-toastify";
import { mutate } from "swr";

// định nghĩa kiểu dữ liệu của props
interface IProps {
  blogs: IBlog[]; // [] chứa tất cả các object bên backend
}

const AppTable = (props: IProps) => {
  // truyền 1 biến props tên là blogs
  const { blogs } = props; // lấy data

  const [blog, setBlog] = useState<IBlog | null>(null); //đang edit object nào

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false); //ép kiểu boolean
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    let text = "Delete blog " + id;
    if (confirm(text) == true) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.warn("Delete Success");
            mutate("http://localhost:8000/blogs"); //để gọi lại API hiển thị danh sách
          }
        });
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table blog</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* render dữ liệu */}
          {blogs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`blogs/${item.id}`} className="btn btn-primary">
                    View
                  </Link>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      ></CreateModal>

      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      ></UpdateModal>
    </>
  );
};

export default AppTable;
