import styles from "./ThrowWork.module.scss";

import WorkApis from "apis/WorkApis";

import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useInput, useModalControl } from "hooks";
import MyButton from "components/Button/MyButton";

export default function ThrowWork() {
  const imgRef = useRef();
  const scriptRef = useRef();
  const imgInputRef = useRef();
  const [img, setImg] = useState();
  // const [title, setTitle] = useInput();
  // const [text, setText] = useInput();
  // const [check, setCheck] = useInput();
  const [script, setScript] = useState();

  const { PostWork } = WorkApis();
  const { handleModalClose } = useModalControl();
  const imgChange = (e) => {
    const selectedFile = e.target.files;
    imgRef.current.src = `img/${selectedFile[0].name}`;
    imgRef.current.style = { objectFit: "contain" };
    setImg(imgRef.current.src);
  };

  const handleOpenScriptDialog = () => {
    scriptRef.current.click();
  };

  const handleScriptSelected = () => {
    const files = scriptRef.current.files;
    const newFiles = Object.values(files);
    setScript(newFiles);
  };

  const handleOpenImgDialog = () => {
    imgInputRef.current.click();
  };

  const handleImgSelected = () => {
    const files = scriptRef.current.files;
    const newFiles = Object.values(files);
    setScript(newFiles);
  };

  return (
    <div className={styles.throwWork}>
      <div className={styles.contentBox}>
        <div className={styles.imgPreviewContainer}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={imgChange}
            ref={imgInputRef}
            multiple
          />
          <img
            className={styles.imgPreview}
            src="img/imgUpload.PNG"
            alt="이미지 없음"
            ref={imgRef}
          />
          <MyButton onClickHandler={handleOpenImgDialog} text="이미지 선택" />
        </div>
        <div>
          <input
            type="file"
            accept=".hwp , .doc , .pdf"
            multiple
            style={{ display: "none" }}
            ref={scriptRef}
            onChange={handleScriptSelected}
          />
          <MyButton
            onClickHandler={handleOpenScriptDialog}
            text="대본을 선택해주세요"
          />
          <div>
            {script ? (
              <div className={styles.script}>
                {script.map((item) => {
                  return <p style={{ marginBottom: "5px" }}>{item.name}</p>;
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.title}>
          <input
            className={styles.inputTitle}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.text}>
          <textarea rows={4} cols={70} placeholder="내용을 입력해주세요" />
        </div>
        <div className={styles.radioBox}></div>
        <div className={styles.submitBox}>
          <MyButton text="제출" />
        </div>
      </div>
    </div>
  );
}

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
