import React, { Fragment, useState } from "react";
import Table from "react-bootstrap/Table";
import AddButton from "./Components/addButton";
import FormEvent from "./Components/formEvent";
import HandleEvent from "./handleEvent";

const Event = (props) => {

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true)
  const handleClose = () => setShow(false);

  const {data, loading} = HandleEvent();

  return (
    <Fragment>

      <AddButton onClick={openModal} />

      <FormEvent show={show} handleClose={handleClose}/>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Event;
