import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function UserWire() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
      <div className="jumbotron d-flex justify-content-center" style={{ borderColor: 'black', }}>


        <div className="module" style={{ borderColor: 'black', backgroundImage: "url('https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')", }}>

          <Button variant="primary" onClick={handleShow} style={{ boxShadow: 'none', borderColor: 'pink', backgroundColor: 'pink', }}>
            <h2>Read me ✩ press me</h2>
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton style={{ borderColor: 'pink', backgroundColor: 'pink', }}>
              <Modal.Title>Additional Info</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ borderColor: 'black', color: 'whitesmoke', backgroundImage: "url('https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')", }}>
              This is a template of my userstory and wireframe. <hr /> Github file linked. <br />

            </Modal.Body>
            <Modal.Footer style={{ borderColor: 'pink', backgroundColor: 'pink', }}>
              <Button variant="secondary" style={{ boxShadow: 'none', borderColor: 'grey', backgroundColor: 'pink', }} onClick={handleClose}>
                Close
          </Button>
              <Button variant="primary" style={{ boxShadow: 'none', borderColor: 'grey', backgroundColor: 'pink', }}>Okurrrr</Button>
            </Modal.Footer>
          </Modal>
          <div>
            <h1 style={{ fontSize: '62px' }}>userstory</h1> <br />
            <div className="col" style={{ backgroundColor: 'pink', borderRadius: '5px', }}><h4>✩be able to make a to-do list</h4></div>
            <div className="col" style={{ backgroundColor: 'whitesmoke', borderRadius: '5px' }}><h4>✩be able to add items to a list, delete and mark off as complete</h4></div>
            <div className="col" style={{ backgroundColor: 'pink', borderRadius: '5px'}}><h4>✩be able to input information in a contact form and sign up
          for notifications.</h4></div>

<hr />
 <h1 style={{ fontSize: '62px' }}>wireframe</h1> <br />
            <div className="col" style={{ backgroundColor: 'whitesmoke', borderRadius: '5px' }}><h4>homepage</h4></div>
            <div className="col" style={{ backgroundColor: 'pink', borderRadius: '5px'}}><h4>contact form</h4></div>
          <div className="col" style={{ backgroundColor: 'whitesmoke', borderRadius: '5px' }}><h4>to-do list</h4></div>
          <div className="col" style={{ backgroundColor: 'pink', borderRadius: '5px'}}><h4>about page</h4></div>
          <div className="col" style={{ backgroundColor: 'whitesmoke', borderRadius: '5px' , }}><h4>account page</h4></div>
            
            <hr />
          
      
          </div>
        </div>
      </div>
      </div>
    </>
  );
}



export default UserWire;