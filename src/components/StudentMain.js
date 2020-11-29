import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components
import Header from "./Header";
import AccessRestrictionModal from "./AccessRestrictionModal";

// Bootstrap
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (props) => {
  return (
    <div className="border rounded p-4 mb-2">
      <div
        className="post-head"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        <h4>{props.postHead}</h4>
        <span className="p-1 bg-light">{props.postCategory}</span>
      </div>
      <div className="post-desc mt-2">{props.postDesc}</div>
      <div className="post-status d-flex mt-2">
        <Link className="btn btn-warning ml-auto" to="/student/resolve">
          {props.postStatus}
        </Link>
      </div>
    </div>
  );
};

const StudentMain = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") == null) handleShow();
  // }, []);

  return (
    <>
      <Header />
      <Container>
        <div
          className="mt-4"
          id="head"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              display: "inline-block",
            }}
          >
            Your Posts
          </h3>
          <Link to="/student/add-post">
            <Button
              style={{
                backgroundColor: "#E7B909",
                color: "#B02A30",
                border: "none",
                marginLeft: "auto",
              }}
            >
              Add new post
            </Button>
          </Link>
        </div>
        <hr />
        <Post
          postHead="Change of lecture timings"
          postCategory="Academics"
          postDesc="This is a sample text. Lorem ipsum dolor sit amet."
          postStatus="Pending"
        />
        <Post
          postHead="Lessening of break time"
          postCategory="Time-table"
          postDesc="This is a sample text. Lorem ipsum dolor sit amet."
          postStatus="Pending"
        />
      </Container>

      {/* Show access restriction modal if user is not logged in */}
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard="false"
      >
        <Modal.Header>
          <Modal.Title>Access Restricted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are not logged in. Please log in as a student to view dashboard.
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">Login</Link>
        </Modal.Footer>
      </Modal> */}
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to view dashboard." />
    </>
  );
};

export default StudentMain;
