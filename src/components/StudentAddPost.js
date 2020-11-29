import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

// bootstrap
import { Form, Container, Col, Button } from "react-bootstrap";
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
          <br></br>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            required
            as="textarea"
            rows="5"
            type="text"
            placeholder="Enter Description"
          ></Form.Control>

          <Form.Group controlId="Priority">
            <br></br>
            <Form.Label>Set Priority</Form.Label>
            <Form.Control as="select" required placeholder="Select Priority">
              <option>Department</option>
              <option>College</option>
              <option>University</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Button
            className="btn btn-danger btn-block"
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
          <br></br>
          <Link to="/student">
            <Button
              className="btn btn-warning btn-block"
              style={
                {
                  // color: "#E7B909",
                  // backgroundColor: "#B02A30",
                  // border: "none",
                }
              }
            >
              Return To DashBoard
            </Button>
          </Link>
        </Form>
      </Container>
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to add post." />
    </>
  );
};

export default StudentAddPost;
