import styles from "./WorkListCompo.module.scss";

export default function WorkListCompo({ workListObj }) {
  return (
    <div className={`${styles.workListBox}`}>
      <div className={`${styles.img}`}>여기는 사진</div>
      <div className={`${styles.info}`}>
        <div className={`${styles.title}`}>
          프로젝트 이름
          <div className={`${styles.date}`}>날짜</div>
        </div>
        <div className={`${styles.text}`}>여기는 프로젝트소개</div>
      </div>
    </div>
  );
}
