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
        <span className="p-1 bg-light font-weight-light font-italic">
          {props.postCategory}
        </span>
      </div>
      <div className="post-desc mt-2">{props.postDesc}</div>
      <div className="post-status d-flex mt-2">
        <Link
          className="btn btn-warning ml-auto text-capitalize"
          to={{
            pathname: "/student/resolve",
            state: {
              description: props.postDesc,
              message: props.postMessg,
            },
          }}
        >
          {props.postStatus}
        </Link>
      </div>
    </div>
  );
};

const StudentMain = () => {
  // fetch student posts on page load
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const userData = {
      accessToken: localStorage.getItem("accessToken"),
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch("/student/get-posts", options);
    await res.json().then((result) => {
      let p = [];
      result.forEach((r) => p.push(r));
      setPosts(p);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

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

        {/* display student posts fetched on load */}
        {posts.map((post) => (
          <Post
            postHead={post.subject}
            postCategory={`Category: ${post.category}`}
            postDesc={post.description}
            postMessg={post.message}
            postStatus={post.status}
          />
        ))}
      </Container>

      {/* Show access restriction modal if user is not logged in */}
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to view dashboard." />
    </>
  );
};

export default StudentMain;
