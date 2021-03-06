import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "./Header";
import AccessRestrictionModal from "./AccessRestrictionModal";

// bootstrap
import { Container, Form, Button } from "react-bootstrap";

const MessageBox = (props) => {
  return (
    <div className="my-4">
      <h5
        className="text-danger p-2 mb-0"
        style={{
          backgroundColor: "#FAF1CD",
          border: "solid 1px #E7B909",
          borderBottom: "hidden",
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
        }}
      >
        <i>{props.userName} Message :</i>
      </h5>
      <div
        className="d-block p-4 mt-0 d-inline-block"
        style={{
          backgroundColor: "#FAF1CD",
          border: "solid 1px #E7B909",
          borderBottomLeftRadius: "3px",
          borderBottomRightRadius: "3px",
          borderTopRightRadius: "3px",
        }}
      >
        {props.userMessage}
      </div>
    </div>
  );
};

const Resolve = (props) => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <MessageBox
            userName="Your"
            userMessage={props.location.state.description}
          />
          <MessageBox
            userName="Admin"
            userMessage={props.location.state.message}
          />
        </div>
        {/* <Form.Group
          controlId="Student Reply"
          className="text-danger p-2 mb-0"
          style={{
            backgroundColor: "#FAF1CD",
            border: "solid 1px #E7B909",

            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
          }}
        >
          <Form.Control
            required
            type="text"
            placeholder="Enter Your Message Here"
            style={{
              backgroundColor: "#fffbeb",
            }}
          ></Form.Control>
        </Form.Group>
        <div
          className="d-flex mb-4"
          style={{
            paddingTop: "20px",
          }}
        >
          <Button type="submit" className="btn btn-danger btn-lg px-5 ">
            Add Reply
          </Button>
        </div> */}
        <header className="mt-2">
          <Link to="/student">
            <Button>Back</Button>
          </Link>
        </header>
      </Container>
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to view your post." />
    </>
  );
};

export default Resolve;
