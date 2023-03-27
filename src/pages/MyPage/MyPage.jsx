import Menu from "components/Menu/Menu";
import Summary from "components/Summary/Summary";
import styles from "./MyPage.module.scss";

export default function MyPage() {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>유저인포</div>
        {/* 들어갈 내용 -> 유저 아이디와 대표 이미지 */}
        <div className={`${styles.menuBar}`}>
          <Menu />
        </div>
      </div>
      <div className={`${styles.contentBox}`}>
        <div className={`${styles.summary}`}>
          <h5>판매관리</h5>
          <Summary />
        </div>
        <div className={`${styles.search}`}>검색</div>
        {/* 검색 기능 -> 프로젝트를 이름순, 등록순, 내가 신청한 프로젝트, 내가 공고한 프로젝트 등 */}
        <div className={`${styles.workList}`}>워크 리스트</div>
        {/* 현재 내가 참여하고 있는 프로젝트를 등록순으로 정리, 이후 검색에 따라 나열순서가 변경된다*/}
      </div>
    </div>
  );
}
