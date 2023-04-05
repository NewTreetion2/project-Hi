import styles from "./ThrowWork.module.scss";

import WorkApis from "apis/WorkApis";

import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useInput, useModalControl } from "hooks";

export default function ThrowWork() {
  const imgRef = useRef();
  const [img, setImg] = useState();
  const [title, setTitle] = useInput();
  const [text, setText] = useInput();
  const [check, setCheck] = useInput();
  const { PostWork } = WorkApis();
  const { handleModalClose } = useModalControl();
  const imgChange = (e) => {
    const selectedFile = e.target.files;
    imgRef.current.src = `img/${selectedFile[0].name}`;
    imgRef.current.style = { objectFit: "contain" };
    setImg(imgRef.current.src);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await PostWork(
      "title",
      "text22",
      "20230310",
      "20230317",
      "3000",
      "02",
      "Y"
    );
    handleModalClose();
  };

  return (
    <div className={styles.throwWork}>
      <div className={styles.contentBox}>
        <label className={styles.imgPreviewContainer}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={imgChange}
          />
          <img
            className={styles.imgPreview}
            src="img/imgUpload.PNG"
            alt="이미지 없음"
            ref={imgRef}
          />
          <p>이미지 선택</p>
        </label>
        <div className={styles.title}></div>
        <div className={styles.text}></div>
      </div>
      <div className={styles.radioBox}></div>
    </div>
    // <Form className={styles.throwWork}>
    //   <Form.Group className={styles.imgPreviewContainer} controlId="formFile">
    //     <Form.Label>
    //       <img
    //         className={styles.imgPreview}
    //         src="img/imgUpload.PNG"
    //         alt="이미지 없음"
    //         ref={imgRef}
    //       />
    //       <p>이미지를 선택해주세요</p>
    //     </Form.Label>
    //     <Form.Control
    //       type="file"
    //       size="sm"
    //       accept="image/*"
    //       style={{ display: "none" }}
    //       onChange={imgChange}
    //     />
    //   </Form.Group>
    //   <div className={styles.contents}>
    //     <Form.Group className={styles.title} controlId="formGridEmail">
    //       <Form.Label>Title</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="오디션 이름을 입력해주세요"
    //         onChange={setTitle}
    //       />
    //     </Form.Group>
    //     <Form.Group controlId="formGridPassword">
    //       <Form.Label>Text</Form.Label>
    //       <Form.Control
    //         as="textarea"
    //         placeholder="내용을 입력해주세요"
    //         rows={3}
    //         onChange={setText}
    //       />
    //     </Form.Group>
    //   </div>
    //   <div>
    //     선택사항
    //     <Form.Group id="formGridCheckbox">
    //       <label>
    //         <Form.Check
    //           type="checkbox"
    //           id="recordingSpace"
    //           value={"02"}
    //           onChange={setCheck}
    //           checked={check === "02"}
    //         />
    //         홈레코딩
    //       </label>
    //       <label>
    //         <Form.Check
    //           type="checkbox"
    //           id="recordingSpace"
    //           value={"01"}
    //           onChange={setCheck}
    //           checked={check === "01"}
    //         />
    //         스튜디오
    //       </label>
    //     </Form.Group>
    //     <Button variant="primary" type="submit" onClick={onSubmit}>
    //       Submit
    //     </Button>
    //   </div>
    // </Form>
  );
}
