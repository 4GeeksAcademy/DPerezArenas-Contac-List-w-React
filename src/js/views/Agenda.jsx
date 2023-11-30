import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ContacImage from '../../img/ContacImage.png'
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router";


export const Agenda = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleDeleteContact = (id) => {
        // const updatedContacts = store.contact.filter((item, currentIndex) => {
        //     return currentIndex !== id;
        //     const updatedContacts = store.contact.filter(contact => contact.id !== id);
        // };
        actions.deleteContact(id);
    }

    return (
        <div className="container">
            
            <h1 className="text-center">Agenda {store.contact.full_name}</h1>
            <ListGroup className="container">
                {store.contact.map((item, index) =>
                    <ListGroup.Item key={index}>
                        <Row>
                            <Col xs={12} md={3} className="text-center">
                                <Image className="ms-4" variant="start" src={ContacImage} roundedCircle style={{ height: "154px", width: "154px" }} />
                            </Col>
                            <Col xs={10} md={7} className="mt-2">
                                <h4>{item.full_name}</h4>
                                <h5 className="text-secondary mt-3"><i className="fas fa-map-marker-alt me-3"></i>{item.address}</h5>
                                <p className="text-secondary my-1"><i className="fas fa-phone me-3"></i>{item.phone}</p>
                                <p className="text-secondary"><i className="fas fa-envelope me-3"></i>{item.email}</p>
                            </Col>
                            <Col xs={2} md={2} className="mt-2">
                                <span
                                    className="fas fa-pencil-alt me-5"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/${item.id}`)}>
                                </span>
                                <span
                                    className="fas fa-trash-alt"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeleteContact(item.id)}>
                                </span>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
}
