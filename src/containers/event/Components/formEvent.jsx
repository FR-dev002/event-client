import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../style.css";

// react-hook forms
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// components
import Modalheader from "../../../components/Modal/modalHeader";
import HttpUploadFile from "../../../constant/httpUploadFile";
import LocalStorage from "../../../helpers/localStorage";

const FormEvent = ({ show, handleClose }) => {
	const MODAL_HEADER = "Create New Event";
	const { getToken } = LocalStorage();
	const token = getToken();

  const { register, handleSubmit, errors } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState("");
	const [fileName, setFileName] = useState("");

	// select file and set filename
	const handleSelectFile = (file) => {
		setFile(file);
		setFileName(file[0].name);
	}

  //   submit data
  const onSubmit = useCallback(async (data) => {
    data.date = startDate;
		data.file = file[0];
		try {
			alert(1)
		} catch (error) {
			console.log(error.message);
		}
  },[]);

  return (
    <Modal show={show} onHide={() => handleClose()} size="lg">
      <Modalheader title={MODAL_HEADER} closeButton={true} />

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className={errors.title && "is-invalid"}
              type="text"
              placeholder="Enter title"
              name="title"
              ref={register({ required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <p className={errors.title && "invalid-feedback"}>{message}</p>
              )}
            />
          </Form.Group>
          {/* End Title */}

          {/* Description */}
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className={errors.title && "is-invalid"}
              as="textarea"
              rows="3"
              name="description"
              ref={register({ required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => (
                <p className={errors.description && "invalid-feedback"}>
                  {message}
                </p>
              )}
            />
          </Form.Group>
          {/* End description */}

          {/* Date And Location */}
          <Form.Group controlId="formDatePicker">
            <Row>
              {/* Date Picker */}
              <Col>
                <Form.Label>Date</Form.Label>
                <Col>
                  <DatePicker
                    className={errors.date && "is-invalid"}
                    name="date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    ref={register({ required: "This is required." })}
                  />
                </Col>
                <ErrorMessage
                  errors={errors}
                  name="date"
                  render={({ message }) => (
                    <p className={errors.date && "invalid-feedback"}>
                      {message}
                    </p>
                  )}
                />
              </Col>
              {/* End Datepicker */}

              {/* Location */}
              <Col>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  className={errors.location && "is-invalid"}
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  ref={register({ required: "This is required." })}
                />

                <ErrorMessage
                  errors={errors}
                  name="location"
                  render={({ message }) => (
                    <p className={errors.location && "invalid-feedback"}>
                      {message}
                    </p>
                  )}
                />
              </Col>
              {/* End Location */}
            </Row>
          </Form.Group>

          <Form.Group controlId="formDatePicker">
            <Form.Label>Picture</Form.Label>
            <Form.File
              id="custom-file"
              label={fileName}
              custom
              name="picture"
              onChange={({ target }) => handleSelectFile(target.files)}
            />
          </Form.Group>
          <input type="submit" />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormEvent;
