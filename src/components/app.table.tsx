'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateModal from './create.model';

// định nghĩa kiểu dữ liệu của props
interface IProps{
  blogs: IBlog[];  // [] chứa tất cả các object bên backend
}

const AppTable = (props: IProps) =>{ // truyền 1 biến props tên là blogs
  const { blogs } = props; // lấy data
  const [showModel, setShowModel] = useState<boolean>(false); //ép kiểu boolean

  return (
    <>
      <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}>
      <h3>Table blog</h3>
      <Button variant='secondary' onClick={() => setShowModel(true)}>Add new</Button>
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
          {blogs.map(blog =>{
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3'>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <CreateModal 
      showModel={showModel}
      setShowModel={setShowModel}
      
      ></CreateModal>
    </>
  );
}

export default AppTable;