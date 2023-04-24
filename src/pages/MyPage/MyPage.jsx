import styles from "./MyPage.module.scss";

import Menu from "components/Menu/Menu";
import Profile from "components/Profile/Profile";
import Summary from "components/Summary/Summary";
import Search from "components/Search/Search";
import WorkListCompo from "components/WorkListCompo/WorkListCompo";

import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { signInUser, mypageSortType, workStatus } from "store";
import { mypageSearchStatus } from "store";

export default function MyPage() {
  const signInUserInfo = useRecoilValue(signInUser);
  const [sortType, setSortType] = useRecoilState(mypageSortType);
  const workList = useRecoilValue(workStatus);
  const [sortWorkList, setSortWorkList] = useState([...workList]);
  const [countWork, setCountWork] = useState([]);
  const searchInfo = useRecoilValue(mypageSearchStatus);

  useEffect(() => {
    const throwWorkList = sortWorkList.filter(
      (item) => item.memberNo === signInUserInfo.mbNo
    );
    // const attendWorkList =

    const tmpCount = [throwWorkList.length, 0, workList.length];
    setCountWork([...tmpCount]);

    if (sortType === "throw") {
      setSortWorkList([...throwWorkList]);
    } else if (sortType === "attend") {
    } else if (sortType === "all") {
      setSortWorkList([...workList]);
    } else if (sortType === "search") {
      console.log(searchInfo);
      setSortType("");
    }
  }, [sortType, setSortWorkList]);

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>
          <Profile user={signInUserInfo} />
        </div>
        <div className={`${styles.menuBar}`}>
          <Menu />
        </div>
      </div>
      <div className={`${styles.contentBox}`}>
        <div className={`${styles.summary}`}>
          <h5>판매관리</h5>
          <Summary countArr={countWork} />
        </div>
        <div className={`${styles.search}`}>
          <Search />
        </div>
        <div className={`${styles.workList}`}>
          {sortWorkList.map((item, index) => {
            return <WorkListCompo key={index} workListObj={item} />;
          })}
        </div>
        {/* 현재 내가 참여하고 있는 프로젝트를 등록순으로 정리, 이후 검색에 따라 나열순서가 변경된다*/}
      </div>
    </div>
  );
}
