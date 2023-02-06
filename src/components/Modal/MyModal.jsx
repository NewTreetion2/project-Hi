import useModalControl from "hooks/useModalControl";
import React, { useState } from "react";
// import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useRecoilValue } from "recoil";
// import { modalStatus } from "store";

export default function MyModal({ children, title, size }) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const modalController = useRecoilValue(modalStatus);

  // useEffect(() => {
  //   handleClose();
  // }, [modalController]);

  const { isModalView, handleModalOpen, handleModalClose } = useModalControl();

  return (
    <>
      <Button variant="secondary" onClick={handleModalOpen} size={size}>
        {title}
      </Button>

      <Modal show={isModalView} onHide={handleModalClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
