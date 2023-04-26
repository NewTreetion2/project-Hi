import MyButton from "components/Button/MyButton";
import styles from "./Comment.module.scss";
import AudioController from "components/AudioController/AudioController";

export default function Comment({ userInfo }) {
  // work-detail 페이지가 열리면 useCallback으로 해당 프로젝트 넘버에 속해 있는 댓글들을 가져온다.
  return (
    <div className={styles.content}>
      <div className={styles.userName}>{userInfo.id}</div>
      <div className={styles.file}>
        <AudioController src={userInfo.src} />
      </div>
      <div className={styles.choiceBtn}>
        <MyButton text="채택" />
      </div>
    </div>
  );
}
