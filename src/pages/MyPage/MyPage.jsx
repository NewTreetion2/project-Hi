import styles from "./MyPage.module.scss";

import Menu from "components/Menu/Menu";
import Profile from "components/Profile/Profile";
import Summary from "components/Summary/Summary";
import Search from "components/Search/Search";
import WorkListCompo from "components/WorkListCompo/WorkListCompo";
import { useState } from "react";

export default function MyPage() {
  const [sortType, setSortType] = useState("");

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>
          <Profile />
        </div>
        <div className={`${styles.menuBar}`}>
          <Menu />
        </div>
      </div>
      <div className={`${styles.contentBox}`}>
        <div className={`${styles.summary}`}>
          <h5>판매관리</h5>
          <Summary />
        </div>
        <div className={`${styles.search}`}>
          <Search />
        </div>
        <div className={`${styles.workList}`}>
          <WorkListCompo />
          <WorkListCompo />
          <WorkListCompo />
          <WorkListCompo />
          <WorkListCompo />
          <WorkListCompo />
          <WorkListCompo />
        </div>
        {/* 현재 내가 참여하고 있는 프로젝트를 등록순으로 정리, 이후 검색에 따라 나열순서가 변경된다*/}
      </div>
    </div>
  );
}
