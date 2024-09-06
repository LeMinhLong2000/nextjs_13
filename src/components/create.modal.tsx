'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from "swr"


interface IProps{
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void; //hàm không return giá trị nào hết
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;
    
    // tạo các biến 
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = () => {
      if(!title){
        toast.error("Not empty title");
        return;
      }
      if(!author){
        toast.error("Not empty author");
        return;
      }
      if(!content){
        toast.error("Not empty content");
        return;
      }

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, author, content})
      }).then(res => res.json())
        .then(res => {
          if(res){
            toast.success("Created Success");
            handleClose();
            mutate("http://localhost:8000/blogs") //để gọi lại API hiển thị danh sách
          }
        });
    }

    const handleClose = () =>{
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModalCreate(false)
    }
  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author..." value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;