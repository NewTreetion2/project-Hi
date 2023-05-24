import MyButton from "components/MyButton/MyButton";
import styles from "./Comment.module.scss";
import AudioController from "components/AudioController/AudioController";

export default function Comment({ userInfo }) {
  // work-detail 페이지가 열리면 useCallback으로 해당 프로젝트 넘버에 속해 있는 댓글들을 가져온다.
  console.log(userInfo);
  return (
    <div className={styles.content}>
      <div className={styles.userName}>{userInfo.mbNm}</div>
      <div className={styles.file}>
        {userInfo.commentAtchList.length ? (
          <AudioController src={userInfo.commentAtchList[0].fileUrl} />
        ) : (
          ""
        )}
      </div>
      <div className={styles.choiceBtn}>
        <MyButton text="채택" />
      </div>
    </div>
  );
}
