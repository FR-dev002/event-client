import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const AddButton = ({onClick}) => {
    return(
        <Container fluid >
        <Row className="justify-content-end mb-3 pt-3" >
            <Button 
                variant="outline-primary" 
                onClick={() => onClick()}
            >Create Event</Button>
        </Row>
      </Container>
    )
}

export default AddButton