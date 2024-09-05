'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

// định nghĩa kiểu dữ liệu của props
interface IProps{
  blogs: IBlog[];  // [] chứa tất cả các object bên backend
}

const AppTable = (props: IProps) =>{ // truyền 1 biến props tên là blogs
  const { blogs } = props; // lấy data
  return (
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
  );
}

export default AppTable;