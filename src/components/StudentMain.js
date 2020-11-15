import React from "react";
import { Link } from "react-router-dom";
// components
import Header from "./Header";

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
    </>
  );
};

export default StudentMain;
