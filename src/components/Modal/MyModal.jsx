import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRecoilValue } from "recoil";
import { modalStatus } from "store";

export default function MyModal({ children, title, size }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalController = useRecoilValue(modalStatus);

  useEffect(() => {
    handleClose();
  }, [modalController]);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} size={size}>
        {title}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
