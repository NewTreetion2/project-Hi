import MyButton from "components/Button/MyButton";
import styles from "./FileUpload.module.scss";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { signInUser } from "store";
import UserApis from "apis/UserApis";
import { useModalControl } from "hooks";

export default function FileUpload({ type }) {
  const imgRef = useRef();
  const recordRef = useRef();
  const signInUserData = useRecoilValue(signInUser);
  const { ChangeProfileImg } = UserApis();
  const { handleModalClose } = useModalControl();

  const ImgUpload = async () => {
    const formData = new FormData();
    const files = imgRef.current.files[0];

    formData.append("id", signInUserData.id);
    formData.append("password", signInUserData.password);
    formData.append("file", files);

    await ChangeProfileImg(formData);
    handleModalClose();
  };

  return (
    <div className={styles.file}>
      <p>파일을 선택해주세요</p>
      {type === "img" ? (
        <input
          className={styles.upload}
          type="file"
          id="uploadFile"
          accept=".img, .png"
          ref={imgRef}
        />
      ) : (
        <input
          className={styles.upload}
          type="file"
          id="uploadFile"
          accept=".mp3, .wav"
          ref={recordRef}
        />
      )}
      <div className={styles.summit}>
        <MyButton text="제출" onClickHandler={ImgUpload} />
      </div>
    </div>
  );
}
