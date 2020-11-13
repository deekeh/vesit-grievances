import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
const Header = () => {
  return (
    <Navbar
      className="pl-0"
      variant="danger"
      style={{
        color: "#E7B909",
        backgroundColor: "#B02A30",
        // height: '150px',
        height: "18vh",
      }}
    >
      <img src={logo} alt="vesit logo" width="150px" />
      <Navbar.Brand
        className="ml-auto"
        style={{
          fontSize: "1.7rem",
        }}
      >
        VESIT Student Grievances
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
