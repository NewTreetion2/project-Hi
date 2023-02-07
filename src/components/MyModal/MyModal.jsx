import React from "react";
import Modal from "react-bootstrap/Modal";

import useModalControl from "hooks/useModalControl";

import { SignIn, SignUp, ThrowWork } from "components";

export default function MyModal() {
  const { modalType, handleModalClose } = useModalControl();

  return (
    <>
      {/* TODO: 여기 버튼이 있으면 안될듯, 해당 컴폰넌트는 모달을 컨트롤하는 컴포넌트가 아닌 모달이 시각화되는 컴포넌트로 생각해서 짜는게 베스트 */}
      {/* 이 버튼은 헤더에 있는게 맞을듯 */}

      <Modal show={modalType !== ""} onHide={handleModalClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          {modalType === "signIn" && <SignIn />}
          {modalType === "signUp" && <SignUp />}
          {modalType === "throwWork" && <ThrowWork />}
        </Modal.Body>
      </Modal>
    </>
  );
}
