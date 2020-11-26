import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

// bootstrap
import { Form, Button, Container, Col } from "react-bootstrap";

const StudentAddPost = () => {
  const AddPost = async (e) => {
    e.preventDefault();
    const formData = {
      Subject: e.target.Subject.value,
      Description: e.target.Description.value,
      Department: e.target.Department.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch("/add-post", options);
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
        <Form method="post" onSubmit={AddPost}>
          <Form.Row>
            <Form.Group as={Col} className="col-md-6" controlId="Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Subject"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} className="col-md-6" controlId="Description">
              {/* <Form.Label>description</Form.Label>
              <Form.Control
                required
                as="textarea"
                type="text"
                placeholder="Enter Description"
              ></Form.Control> */}
            </Form.Group>
            <Form.Group as={Col} className="col-md-6" controlId="Department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Department"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            type="text"
            placeholder="Enter Description"
          ></Form.Control>
          <Button
            block
            type="submit"
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
    </>
  );
};

export default StudentAddPost;
