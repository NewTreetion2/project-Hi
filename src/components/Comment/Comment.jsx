import MyButton from "components/Button/MyButton";
import styles from "./Comment.module.scss";

export default function Comment() {
  // work-detail 페이지가 열리면 useCallback으로 해당 프로젝트 넘버에 속해 있는 댓글들을 가져온다.
  return (
    <div className={styles.content}>
      <div className={styles.userName}>트리션</div>
      <div className={styles.file}>파일첨부 목록</div>
      <div className={styles.choiceBtn}>
        <MyButton text="채택" />
      </div>
    </div>
  );
}
