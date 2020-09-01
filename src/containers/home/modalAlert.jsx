import React from 'react'
import Modal from "react-bootstrap/Modal";
import Modalheader from "../../components/Modal/modalHeader";
import { Link } from 'react-router-dom';

const MODAL_HEADER = "Anda Belum Login";

const ModalAlert = ({show, handleClose}) => {

    return (
        <Modal show={show} onHide={() => handleClose()} size="lg">
        <Modalheader title={MODAL_HEADER} closeButton={true} />
        <Modal.Body>
            <p>Silahkan klik link berikut untuk login <Link to="/login" >Login</Link></p>
        </Modal.Body>
      </Modal>
    )
}

export default ModalAlert