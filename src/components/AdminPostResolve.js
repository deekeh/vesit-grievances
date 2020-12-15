import React from "react";
import { Link } from "react-router-dom";
// components
import Header from "./Header";

// bootstrap
import {
  Container,
  Button,
  Form,
  Dropdown,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";

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
  const sendMessage = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken: localStorage.getItem("accessToken"),
      }),
    };
    const response = await fetch("/admin/send-message", options);
    await response.json().then((result) => {
      console.log("DONE");
    });
  };
  return (
    <>
      <Header />
      <Container>
        <header className="mt-2">
          <Link to="/admin">
            <Button>Back</Button>
          </Link>
          <h3>Change of lecture timings</h3>
        </header>
        <hr />

        <MessageBox
          userName={props.location.data.user}
          userMessage={props.location.data.description}
        />
        {/* <MessageBox
          userName="Admin"
          userMessage={props.location.data.description}
        /> */}
        <Form onSubmit={sendMessage}>
          <Form.Group
            controlId="Admin Reply"
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
            <div className="ml-auto">
              {/* <DropdownButton
                as={ButtonGroup}
                title="Set Priority"
                id="bg-vertical-dropdown-1"
                className="mr-2"
              >
                <Dropdown.Item eventKey="1">Department</Dropdown.Item>
                <Dropdown.Item eventKey="2">College</Dropdown.Item>
                <Dropdown.Item eventKey="3">University</Dropdown.Item>
              </DropdownButton> */}

              <Button type="submit" className="btn btn-danger btn-lg px-5 ">
                Add Reply
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AdminPostResolve;
