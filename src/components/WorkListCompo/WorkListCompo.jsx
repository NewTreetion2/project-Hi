import styles from "./WorkListCompo.module.scss";

export default function WorkListCompo({ workListObj }) {
  return (
    <div className={`${styles.workListBox}`}>
      <div className={`${styles.imgWrapper}`}>
        <img src="img/default_profile.png" alt="" />
      </div>
      <div className={`${styles.info}`}>
        <div className={`${styles.title}`}>
          <h3>프로젝트 이름</h3>
          <div className={`${styles.date}`}>날짜</div>
        </div>
        <div className={`${styles.text}`}>여기는 프로젝트소개</div>
      </div>
    </div>
  );
}
