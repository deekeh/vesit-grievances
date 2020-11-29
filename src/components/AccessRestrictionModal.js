import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// bootstrap
import { Modal } from "react-bootstrap";

const AccessRestrictionModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) handleShow();
  }, [show]);
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken') == null) handleShow();
  // })
  return (
    <>
      {/* Show access restriction modal if user is not logged in */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard="true"
        size="lg"
        centered
      >
        <Modal.Header>
          <Modal.Title>Access Restricted</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Link to="/" className="btn btn-danger">
            Login
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccessRestrictionModal;
