import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// components
import Header from "./Header";

// bootstrap
import { Container, Form, Button, Modal } from "react-bootstrap";

const LoginBox = (props) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    header: "",
    body: "",
    loginSuccess: false,
  });
  const handleClose = () => setShow(false);
  const handleShow = (header, body, loginSuccess) => {
    setModalData({
      header,
      body,
      loginSuccess,
    });
    setShow(true);
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch(props.to, options);
    await res.json().then((result) => {
      if (result.status === "success") {
        console.log(result);
        handleShow(
          "Login Success",
          "Login successful, go to your dashboard now.",
          true
        );
      } else if (result.status === "user does not exist") {
        console.log(result);
        handleShow(
          "Login Failure",
          "The email ID was not found in our database. Please register as a student first.",
          false
        );
      } else if (result.status === "invalid login") {
        console.log(result);
        handleShow(
          "Login Failure",
          "The credentials you used were incorrect. Please try again.",
          true
        );
      } else {
        handleShow(
          "Login Failure",
          "Login failed, there was some problem with the server.",
          false
        );
      }
    });
    // if (resJson.status === "success") return <Redirect to="/student" />;
  };

  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "30px",
        margin: "10px",
        color: "#B02A30",
        backgroundColor: "#E7B909",
        minWidth: "300px",
      }}
    >
      <h5>{props.header}</h5>
      <hr />
      <Form onSubmit={userLogin}>
        <Form.Group controlId="studentEmail">
          <Form.Label>VESIT Email ID</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder={props.emailText}
          />
        </Form.Group>

        <Form.Group controlId="studentPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder={props.passwordText}
          />
        </Form.Group>
        <Button
          block
          type="submit"
          style={{
            color: "#E7B909",
            backgroundColor: "#B02A30",
            border: "none",
          }}
        >
          Login
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            height: "100%",
            minHeight: "82vh",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <LoginBox
            to="/student/login"
            header="Student Login"
            emailText="Enter your @ves.ac.in ID"
            passwordText="Enter provided password"
          />
          <LoginBox
            to="/admin/login"
            header="Admin Login"
            emailText="Enter Admin ID"
            passwordText="Enter admin password"
          />
          <div
            style={{
              width: "100%",
            }}
          >
            <Link to="/student/register">
              <button
                className="btn btn-danger btn-lg btn-block"
                style={{
                  color: "#E7B909",
                  backgroundColor: "#B02A30",
                  border: "none",
                }}
              >
                Register as a new student
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
