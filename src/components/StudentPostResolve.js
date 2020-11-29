import React from "react";
//import {Link} from 'react-router-dom';

// components
import Header from "./Header";
import AccessRestrictionModal from "./AccessRestrictionModal";

// bootstrap
import { Container } from "react-bootstrap";

const Resolve = () => {
  return (
    <>
      <Header />
      <Container className="mt-2">
        <div>
          <h3
            style={{
              display: "inline-block",
            }}
          >
            <b>Change Of Lecture Timings</b>
          </h3>
        </div>
        <hr />
        <div className="mb-4">
          <div>
            <b>Your Query:</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            viverra accumsan in nisl nisi.
          </div>
        </div>
        <div className="mb-4">
          <div>
            <b>Admin Reply:</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            viverra accumsan in nisl nisi.
          </div>
        </div>
        <hr />
        <div className="btn btn-success">Resolved</div>
      </Container>
      <AccessRestrictionModal body="You are not logged in. Please log in as a student to view your post." />
    </>
  );
};

export default Resolve;
