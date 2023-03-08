import styles from "./MyPage.module.scss";

export default function MyPage() {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>유저인포</div>
        <div className={`${styles.menuBar}`}>메뉴바</div>
      </div>
      <div className={`${styles.contentBox}`}>
        <div className={`${styles.summary}`}>
          <h5>판매관리</h5>
          <div className={`${styles.summaryFunctionBox}`}></div>
        </div>
        <div className={`${styles.search}`}>검색</div>
        <div className={`${styles.workList}`}>워크 리스트</div>
      </div>
    </div>
  );
}
