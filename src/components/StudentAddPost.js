import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

// bootstrap
import { Form, Container, Col, Button, Modal } from "react-bootstrap";
import AccessRestrictionModal from "./AccessRestrictionModal";

const StudentAddPost = () => {
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");

  const hideModal = () => {
    setSubject("");
    setDepartment("");
    setDescription("");
    setShow(false);
  };

  const addPost = async (e) => {
    e.preventDefault();
    const formData = {
      subject: e.target.subject.value,
      description: e.target.description.value,
      category: e.target.category.value,
      department: e.target.department.value,
      level: e.target.level.value,
      accessToken: localStorage.getItem("accessToken"),
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch("/student/add-post", options);
    console.log(res);
    if (res.status === 201) {
      setShow(true);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className="my-3">
          <h3
            style={{
              display: "inline-block",
            }}
          >
            Create New Post
          </h3>
        </div>
        <Form method="post" onSubmit={addPost}>
          <Form.Row>
            <Form.Group as={Col} md={6} controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                id="subject"
                name="subject"
                required
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                id="department"
                name="department"
                required
                type="text"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm={12} controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="description"
                name="description"
                required
                as="textarea"
                rows="5"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={6} controlId="level">
              <Form.Label>Set Priority</Form.Label>
              <Form.Control
                id="level"
                as="select"
                name="level"
                required
                placeholder="Select Priority"
              >
                <option>Department</option>
                <option>College</option>
                <option>University</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="category">
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                id="category"
                as="select"
                name="category"
                required
                placeholder="Select catogory of your grievance"
              >
                <option>Academics</option>
                <option>Examination</option>
                <option>Fees</option>
                <option>Marksheets</option>
                <option>Miscellaneous / Others</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button
            className="btn btn-danger btn-block"
            block
            type="submit"
            className="mt-4 btn-lg"
            style={{
              color: "#E7B909",
              backgroundColor: "#B02A30",
              border: "none",
            }}
          >
            Submit
          </Button>
          <br></br>
          <Link className="btn btn-warning btn-block btn-lg my-2" to="/student">
            Return To DashBoard
          </Link>
        </Form>
      </Container>

      {/* Post succes modal */}
      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your grievance was sent successfully.</Modal.Body>
        <Modal.Footer>
          <Link to="/student" className="btn btn-danger">
            Return to dashboard
          </Link>
        </Modal.Footer>
      </Modal>

      {/* restrict page access if user is not logged in */}
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to add post." />
    </>
  );
};

export default StudentAddPost;
