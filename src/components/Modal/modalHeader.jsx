import React from 'react'
import Modal from "react-bootstrap/Modal";

const Modalheader = ({title, closeButton}) => {
    return (
        <Modal.Header closeButton={closeButton}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
    )
}


export default Modalheader;