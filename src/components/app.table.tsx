'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { use, useState } from 'react';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';

// định nghĩa kiểu dữ liệu của props
interface IProps{
  blogs: IBlog[];  // [] chứa tất cả các object bên backend
}

const AppTable = (props: IProps) =>{ // truyền 1 biến props tên là blogs
  const { blogs } = props; // lấy data

  const [blog, setBlog] = useState<IBlog | null>(null); //đang edit object nào

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false); //ép kiểu boolean
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false); 

  return (
    <>
      <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}>
      <h3>Table blog</h3>
      <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add new</Button>
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
          {blogs.map(item =>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3' onClick={()=>{
                    setBlog(item);
                    setShowModalUpdate(true);
                  }}>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            )
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
}

export default AppTable;