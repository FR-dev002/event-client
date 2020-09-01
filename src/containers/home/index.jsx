import React, { useContext, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// customHooks
import HandleHome from "./handleHome";
import { AuthContext } from "./../../ContextApi/authContect";
import ModalAlert from './modalAlert';


const Render = ({data, handleButton, ...props}) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="mt-3">
        <Card.Img variant="top" src={data.picture} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Button 
            variant="primary"
            onClick={() => handleButton()}
          >Daftar Sekarang</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = (props) => {

  const { isLogged } = useContext(AuthContext);
  const [show, setshow] = useState(false)

  const handleButton = () => {
    isLogged ? submitAttendance() :  openModal();
  }

  const submitAttendance = () => {
    alert(2)
  }

  const openModal = () => setshow(true);
  const handleClose = () => setshow(false);
  const { data, loading } = HandleHome();
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Container fluid className="mt-2">
          <Row>
          {
            data.map((event, key) => {
              return(
                <Render data={event} key={key} handleButton={handleButton} />
              )
            })
          }
          </Row>
        </Container>

        <ModalAlert show={show}  handleClose={handleClose} />
      </div>
    );
  }
};

export default Home;
