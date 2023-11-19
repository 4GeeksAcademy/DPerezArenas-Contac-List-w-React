import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export const AddContact = () => {

    
  return (
    <Form className='container mt-5'>
      <h1 className="text-center">Add a new contact</h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='fw-bold'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='fw-bold'>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='fw-bold'>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>
      <div className="d-grid">
      <Button variant="primary">save</Button>{' '}
      </div>
      <Link to="/">or get back to contacts</Link>
    </Form>
  );
}