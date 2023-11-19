import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Navbar } from "../component/navbar";
import { DeleteContact } from "../component/DeleteContact.jsx";
import { Modal } from "react-bootstrap";

// const handleDeleteContact = (e) =>{
//     DeleteContact(e.target.value);
// } 

export const Contact = () => {

    return (
        <>
            <Navbar />
            <ListGroup className="container">
                <ListGroup.Item>
                    <Row>
                        <Col xs={3} md={3}>
                            <Image className="w-100" variant="start" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" roundedCircle />
                        </Col>
                        <Col xs={7} md={7} className="mt-2">
                            <h4>Dave Bradley</h4>
                            <h5 className="text-secondary mt-3"><i className="fas fa-map-marker-alt me-3"></i>Some quick example text</h5>
                            <p className="text-secondary my-1"><i className="fas fa-phone me-3"></i>Some quick example text</p>
                            <p className="text-secondary"><i className="fas fa-envelope me-3"></i>Some quick example text</p>
                        </Col>
                        <Col xs={2} md={2} className="mt-2">
                            <i className="fas fa-pencil-alt me-5" /* onClick={''} */></i><span className="fas fa-trash-alt" /* onClick={handleDeleteContact} */></span>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}
