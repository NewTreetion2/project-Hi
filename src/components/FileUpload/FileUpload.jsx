import MyButton from "components/Button/MyButton";
import styles from "./FileUpload.module.scss";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { signInUser } from "store";
import UserApis from "apis/UserApis";

export default function FileUpload({ type }) {
  const imgRef = useRef();
  const recordRef = useRef();
  const signInUserData = useRecoilValue(signInUser);
  const { ChangeProfileImg } = UserApis();

  const ImgUpload = async () => {
    const formData = new FormData();
    const files = imgRef.current.files;

    formData.append("id", signInUserData.id);
    formData.append("password", signInUserData.password);
    formData.append("file", files[0].name);

    console.log(signInUserData);
    console.log(formData.get("file"));
    console.log(files);

    const res = await ChangeProfileImg(formData);
    console.log(res);
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
