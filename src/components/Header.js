import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const logout = () => {
    localStorage.clear();
    console.log("logged out");
    // this.props.history.push("/");
  };
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
        className="ml-auto text-center"
        style={{
          fontSize: "1.7rem",
        }}
      >
        VESIT <wbr />
        Student <wbr />
        Grievances
      </Navbar.Brand>
      {localStorage.getItem("accessToken") == null ? (
        ""
      ) : (
        <Link
          to="/"
          onClick={logout}
          className="btn my-auto"
          style={{
            backgroundColor: "#E7B909",
            color: "#B02A30",
            border: "none",
            padding: "5px",
          }}
        >
          Logout
        </Link>
      )}
    </Navbar>
  );
};

export default Header;
