import React, { useState } from 'react';
import './ProfileForm.css'
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../../Firebase-config';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ProfileForm({show, setShow}) {
  // FOR STORING ALL INPUTS
  const [data, setData] = useState({});

  // FROM AUTHCONTEXT
  const { user } = UserAuth();

  const navigate = useNavigate();

  // FOR PROFILE MODAL FORM
  const handleClose = () => setShow(false);

  // FOR FIRESTORE DATABASE
  const collectionRef = collection(db, 'profile');

  // TO HANDLE INPUTS
  const handleInputs = (e) => {
    const newInput = { [e.target.name]: e.target.value};

    setData({...data, ...newInput})
  }

  // FOR SAVING PROFILE INFO
  const handleSave = async (e) => {
    e.preventDefault()
    
    await addDoc(collectionRef, {
    fullname: data.fullname,
    nationality: data.nationality,
    phoneNumber: data.phoneNumber,
    email: user.email,
    uid: user.uid,
    });
    navigate('/profile')
  }

    

  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
        <div className="profileForm">
            <MDBContainer>
            <MDBTypography note noteColor='primary'>
                Please Fill In Your Details
            </MDBTypography>
            </MDBContainer>
        </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                onChange={(e) => handleInputs(e)}
                placeholder="enter your fullname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                type="text"
                name="nationality"
                onChange={(e) => handleInputs(e)}
                placeholder="enter your nationality"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                onChange={(e) => handleInputs(e)}
                placeholder="enter your number"
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileForm;
