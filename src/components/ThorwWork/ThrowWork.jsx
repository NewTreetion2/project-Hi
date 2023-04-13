import styles from "./ThrowWork.module.scss";

import WorkApis from "apis/WorkApis";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useRef, useState, useEffect } from "react";

import { useInput, useModalControl } from "hooks";
import MyButton from "components/Button/MyButton";
import { useRecoilValue } from "recoil";
import { signInUser } from "store";

export default function ThrowWork() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const changeDateForm = (day) => {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();

    const formChangeDate = `${year}${month < 10 ? "0" : ""}${month}${
      date < 10 ? "0" : ""
    }${date}`;

    return formChangeDate;
  };

  const imgRef = useRef();
  const scriptRef = useRef();
  const imgInputRef = useRef();

  const [title, setTitle] = useInput();
  const [content, setContent] = useInput();
  const [price, setPrice] = useInput();
  const [deadline, setDeadline] = useInput();

  const [img, setImg] = useState();
  const [script, setScript] = useState();
  const [recordingType, setRecordingType] = useState("");
  const [recordingPlace, setRecordingPlace] = useState("");
  const [active, setActive] = useState(false);

  const signInUserData = useRecoilValue(signInUser);

  const { PostWork } = WorkApis();

  const { handleModalClose } = useModalControl();

  const imgChange = (e) => {
    const selectedFile = e.target.files;
    imgRef.current.src = `img/${selectedFile[0].name}`;
    imgRef.current.style = { objectFit: "contain" };
    setImg(imgRef.current.src);
  };

  const typeOnChangeHandler = (e) => {
    setRecordingType(e.target.value);
  };

  const placeOnChangeHandler = (e) => {
    setRecordingPlace(e.target.value);
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

  const onSubmitHandler = async () => {
    const today = changeDateForm(startDate);
    const deadline = changeDateForm(endDate);
    const res = await PostWork(
      title,
      signInUserData.mbNo,
      content,
      today,
      deadline,
      price,
      recordingPlace,
      "Y"
    );
    console.log(today, deadline, res);

    handleModalClose();
  };

  useEffect(() => {
    if (
      title !== "" &&
      content !== "" &&
      price !== "" &&
      startDate !== "" &&
      endDate !== "" &&
      recordingPlace !== "" &&
      recordingType !== ""
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [
    title,
    content,
    price,
    startDate,
    endDate,
    recordingPlace,
    recordingType,
    setActive,
  ]);

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
            onChange={setTitle}
          />
        </div>
        <div className={styles.text}>
          <textarea
            rows={4}
            cols={70}
            placeholder="내용을 입력해주세요"
            onChange={setContent}
          />
        </div>
        <div className={styles.radioBox}>
          <div className={styles.boxForm}>
            <p className={styles.optionTitle}>녹음타입</p>
            <div className={styles.contentForm}>
              <label>
                <input
                  type="radio"
                  value={"animation"}
                  checked={recordingType === "animation"}
                  onChange={typeOnChangeHandler}
                />
                <p>애니메이션</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"game"}
                  checked={recordingType === "game"}
                  onChange={typeOnChangeHandler}
                />
                <p>게임</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"ad"}
                  checked={recordingType === "ad"}
                  onChange={typeOnChangeHandler}
                />
                <p>광고</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"narration"}
                  checked={recordingType === "narration"}
                  onChange={typeOnChangeHandler}
                />
                <p>내레이션</p>
              </label>
            </div>
          </div>
          <div className={styles.boxForm}>
            <p className={styles.optionTitle}>녹음금액</p>
            <div className={styles.contentBox}>
              <input
                type="number"
                className={styles.inputText}
                placeholder="금액을 입력해주세요 (숫자만 입력해주세요)"
                onChange={setPrice}
                min={0}
              />
            </div>
          </div>
          <div className={styles.boxForm}>
            <p className={styles.optionTitle}>녹음장소</p>
            <div className={styles.contentForm}>
              <label>
                <input
                  type="radio"
                  value="studio"
                  checked={recordingPlace === "studio"}
                  onChange={placeOnChangeHandler}
                />
                <p>스튜디오</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="home"
                  checked={recordingPlace === "home"}
                  onChange={placeOnChangeHandler}
                />
                <p>홈</p>
              </label>
            </div>
          </div>
          <div className={styles.boxForm}>
            <p className={styles.optionTitle}>마감기한</p>
            <div className={styles.contentBox}>
              <div className={styles.dateBox}>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className={styles.dateForm}
                  />
                </div>
                ~
                <div>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className={styles.dateForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitBox}>
          <MyButton
            text="제출"
            onClickHandler={onSubmitHandler}
            disabled={active}
          />
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
