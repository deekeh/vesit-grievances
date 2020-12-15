import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

// bootstrap
import { Container, Col, Form, Button } from "react-bootstrap";

const StudentRegister = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      department: e.target.department.value,
      batch: e.target.batch.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch("/register", options);
    console.log(res);
  };
  return (
    <>
      <Header />
      <Container>
        <div className="my-3">
          <Form method="post" onSubmit={submitForm}>
            <Form.Row>
              <Form.Group as={Col} controlId="studentName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your name"
                  name="name"
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                className="col-md-6"
                controlId="studentEmail"
              >
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your VESIT email ID"
                  name="email"
                ></Form.Control>
              </Form.Group>
              <Form.Group
                as={Col}
                className="col-md-6"
                controlId="studentPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter a strong password"
                  name="password"
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} className="col-md-6">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" defaultValue="Engg" name="department">
                  <option>MCA</option>
                  <option>Engg</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} className="col-md-6">
                <Form.Label>Batch</Form.Label>
                <Form.Control as="select" defaultValue="2020" name="batch">
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button type="submit" className="btn btn-danger btn-block">
              Submit
            </Button>
            <Link className="btn btn-warning btn-1g my-4 btn-block" to="/">
              Return To login page
            </Link>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default StudentRegister;
