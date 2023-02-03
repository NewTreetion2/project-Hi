import useModalControl from "hooks/useModalControl";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyModal({ title, content, key }) {
  const { isModalView, handleModalOpen, handleModalClose } = useModalControl();

  return (
    <>
      <Button variant="secondary" onClick={handleModalOpen}>
        {title}
      </Button>

      <Modal key={key} show={isModalView} onHide={handleModalClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}
