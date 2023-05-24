import styles from "./ThrowWork.module.scss";

import WorkApis from "apis/WorkApis";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useRef, useState, useEffect } from "react";

import { useInput, useModalControl } from "hooks";
import MyButton from "components/MyButton/MyButton";
import { useRecoilValue } from "recoil";
import { userDataState } from "store";

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

  const [img, setImg] = useState();
  const [script, setScript] = useState();
  const [recordingType, setRecordingType] = useState("");
  const [recordingPlace, setRecordingPlace] = useState("");
  const [active, setActive] = useState(false);

  const userData = useRecoilValue(userDataState);

  const { PostWork } = WorkApis();

  const { handleModalClose } = useModalControl();

  const typeOnChangeHandler = (e) => {
    setRecordingType(e.target.value);
  };

  const placeOnChangeHandler = (e) => {
    setRecordingPlace(e.target.value);
  };

  const handleOpenImgDialog = () => {
    imgInputRef.current.click();
  };

  const handleImgSelected = (e) => {
    const files = e.target.files[0];
    imgRef.current.src = `img/${files.name}`;
    imgRef.current.style = { objectFit: "contain" };
    setImg(files);
  };

  const handleOpenScriptDialog = () => {
    scriptRef.current.click();
  };

  const handleScriptSelected = (e) => {
    const files = e.target.files[0];
    setScript(files);
  };

  const onSubmitHandler = async () => {
    const today = changeDateForm(startDate);
    const deadline = changeDateForm(endDate);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("mbNo", userData.mbNo);
    formData.append("content", content);
    formData.append("registrationDate", today);
    formData.append("closingDate", deadline);
    formData.append("price", price);
    formData.append("recordingPlace", recordingPlace);
    formData.append("recordingType", recordingType);
    formData.append("images", img);
    formData.append("scripts", script);

    const res = await PostWork(formData);

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
            onChange={handleImgSelected}
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
            accept=".zip, .7z"
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
                <p style={{ marginBottom: "5px" }}>{script.name}</p>
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
                  value={"01"}
                  checked={recordingType === "01"}
                  onChange={typeOnChangeHandler}
                />
                <p>애니메이션</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"02"}
                  checked={recordingType === "02"}
                  onChange={typeOnChangeHandler}
                />
                <p>게임</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"03"}
                  checked={recordingType === "03"}
                  onChange={typeOnChangeHandler}
                />
                <p>광고</p>
              </label>
              <label>
                <input
                  type="radio"
                  value={"04"}
                  checked={recordingType === "04"}
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
                  value="01"
                  checked={recordingPlace === "01"}
                  onChange={placeOnChangeHandler}
                />
                <p>스튜디오</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="02"
                  checked={recordingPlace === "02"}
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
