import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const { idContact } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  // if(id)
  // const location = useLocation();

  useEffect(() => {
    if (idContact && idContact !== 'new') {
      const contactToEdit = store.contact.find(contact => contact.id === parseInt(idContact));
      if (contactToEdit) {
        setName(contactToEdit.full_name);
        setEmail(contactToEdit.email);
        setPhone(contactToEdit.phone);
        setAddress(contactToEdit.address);
      }
    }
  }, [idContact, store.contact]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || address === '' || phone === '') {
      return setShowAlert(true);
    // (alert(("All fields must be filled")));
    } else {
      const newContact = {
        full_name: name,
        email: email,
        agenda_slug: 'Daniel',
        address: address,
        phone: phone
      };
      const editedContact = {
        full_name: name,
        email: email,
        agenda_slug: 'Daniel',
        address: address,
        phone: phone
      };
    }

    if (idContact && idContact !== 'new') {
      actions.updateContact(idContact, editedContact);

    } else {
      console.log("Creating new contact");
      actions.createContact(newContact);
    }
    navigate("/");
  };

  const handleReset = () => {
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
  };

  return (
    <Form className='container mt-5' onSubmit={handleSubmit}>
      <h1 className="text-center">{idContact === 'new' ? 'Add new contact' : 'Contact to edit'}</h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='fw-bold'>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label className='fw-bold'>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label className='fw-bold'>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type='submit'>save</Button>
        <Button variant="secondary" type='reset' onClick={handleReset}>reset</Button>
      </div>
      <Link to="/">or get back to contacts</Link>
      <Modal show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Header closeButton className="bg-info bg-opacity-75">
          <Modal.Title>Form error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          All fields must be filled.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}