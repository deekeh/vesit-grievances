import React from "react";

// components
import Header from "./Header";

// bootstrap
import { Container, Button,Form } from "react-bootstrap";

const MessageBox = (props) => {
  return (
    <div className="mb-4">
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
        <i>{props.userName}'s Message :</i>
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

const AdminPostResolve = (props) => {
  return (
    <>
      <Header />
      <Container>
        <header className="mt-2">
          <h3>Change of lecture timings</h3>
        </header>
        <hr />

        <MessageBox
          userName={props.location.data.user}
          userMessage={props.location.data.description}
        />
      <Form.Group controlId="Admin Reply" className="text-danger p-2 mb-0"
        style={{
          backgroundColor: "#FAF1CD",
          border: "solid 1px #E7B909",

          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px"}}>
            <Form.Label><h5><i>Admin Reply :</i></h5></Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your Message Here"
              style={{
                backgroundColor:"#fffbeb"
              }}
            ></Form.Control>
          </Form.Group>

        <div className="d-flex mb-4" style={{
          paddingTop:"40px"
        }}>
          <Button className="btn btn-danger btn-lg px-5 ml-auto">
            Add Reply
          </Button>
        </div>
      </Container>
    </>
  );
};

export default AdminPostResolve;
