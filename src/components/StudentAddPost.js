import React from "react";
// import { Link } from "react-router-dom";
import Header from "./Header";

// bootstrap
import { Form, Button, Container, Col } from "react-bootstrap";
import AccessRestrictionModal from "./AccessRestrictionModal";

const StudentAddPost = () => {
  const addPost = async (e) => {
    e.preventDefault();
    const formData = {
      subject: e.target.subject.value,
      description: e.target.description.value,
      department: e.target.department.value,
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
            <Form.Group as={Col} className="col-md-6" controlId="Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                name="subject"
                required
                type="text"
                placeholder="Enter Subject"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} className="col-md-6" controlId="Department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                name="department"
                required
                type="text"
                placeholder="Enter Department"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            required
            as="textarea"
            type="text"
            placeholder="Enter Description"
          ></Form.Control>
          <Button
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
        </Form>
      </Container>
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to add post." />
    </>
  );
};

export default StudentAddPost;
