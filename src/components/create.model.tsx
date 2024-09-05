'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


interface IProps{
    showModel: boolean;
    setShowModel: (value: boolean) => void; //hàm không return giá trị nào hết
}

function CreateModal(props: IProps) {
    const { showModel, setShowModel } = props;
    
    // tạo các biến 
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = () => {
        console.log("check", title, author, content);
    }

    const handleClose = () =>{
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModel(false)
    }
  return (
    <>
      <Modal
        show={showModel}
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