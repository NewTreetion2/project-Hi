import MyButton from "components/Button/MyButton";
import styles from "./FileUpload.module.scss";

export default function FileUpload() {
  return (
    <div className={styles.file}>
      <p>음성파일을 선택해주세요</p>
      <input
        className={styles.upload}
        type="file"
        id="recordingFile"
        // accept=".mp3, .wav"
      />
      <div className={styles.summit}>
        <MyButton text="제출" />
      </div>
    </div>
  );
}
