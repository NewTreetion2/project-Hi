import styles from "./ThrowWork.module.scss";

import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useInput } from "hooks";

import { dummyData } from "store";

export default function ThrowWork() {
  const imgRef = useRef();
  const [img, setImg] = useState();
  const [title, setTitle] = useInput();
  const [text, setText] = useInput();
  const [check, setCheck] = useInput();
  const [dummy, setDummy] = useRecoilState(dummyData);
  const imgChange = (e) => {
    const selectedFile = e.target.files;
    imgRef.current.src = `img/${selectedFile[0].name}`;
    imgRef.current.style = { objectFit: "contain" };
    setImg(imgRef.current.src);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputArr = [...dummy];
    inputArr.push({
      src: img,
      title: title,
      text: text,
      check: check,
    });
    setDummy(inputArr);
  };

  return (
    <Form>
      <Row className={`mb-3`}>
        <Form.Group controlId="formFile" className={`mb-3`}>
          <Form.Label>
            <div className={`${styles.imgPreviewContainer}`}>
              <img
                className={`${styles.imgPreview}`}
                src="img/imgUpload.PNG"
                alt="이미지 없음"
                ref={imgRef}
              />
            </div>
            <p>이미지를 선택해주세요</p>
          </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            accept="image/*"
            style={{ display: "none" }}
            onChange={imgChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="오디션 이름을 입력해주세요"
            onChange={setTitle}
          />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="내용을 입력해주세요"
          rows={3}
          onChange={setText}
        />
      </Form.Group>

      <Row className={`mb-3`}>
        선택사항
        <Form.Group className={`mb-3`} id="formGridCheckbox">
          <label>
            <Form.Check
              type="checkbox"
              id="recordingSpace"
              value={"home"}
              onChange={setCheck}
              checked={check === "home"}
            />
            홈 레코딩
          </label>
          <label>
            <Form.Check
              type="checkbox"
              id="recordingSpace"
              value={"studio"}
              onChange={setCheck}
              checked={check === "studio"}
            />
            스튜디오
          </label>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
}
