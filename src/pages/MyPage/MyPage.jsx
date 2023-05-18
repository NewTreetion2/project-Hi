import styles from "./MyPage.module.scss";

import Menu from "components/Menu/Menu";
import Profile from "components/Profile/Profile";
import Summary from "components/Summary/Summary";
import Search from "components/Search/Search";
import WorkListCompo from "components/WorkListCompo/WorkListCompo";

import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import {
  signInUser,
  mypageSortType,
  workStatus,
  mypageSearchStatus,
} from "store";

import WorkApis from "apis/WorkApis";

const formData = new FormData();

export default function MyPage() {
  const signInUserInfo = useRecoilValue(signInUser);
  const workList = useRecoilValue(workStatus);
  const searchInfo = useRecoilValue(mypageSearchStatus);

  const [sortType, setSortType] = useRecoilState(mypageSortType);

  const [sortWorkList, setSortWorkList] = useState([...workList]);
  const [countWork, setCountWork] = useState([]);
  const [throwWorkList, setThrowWorkList] = useState([]);

  const { GetWorkList } = WorkApis();

  const getUserWorkList = async () => {
    try {
      formData.append("mbNo", signInUserInfo.mbNo);
      const res = await GetWorkList(formData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    // const attendWorkList =
    const setUserWorkList = async () => {
      const res = await getUserWorkList();
      setThrowWorkList(res);
    };

    setUserWorkList();

    // 현재는 임시방편으로 제작했지만, 추후에 서버에서 작업한 뒤 []만 넘어올 예정

    const tmpCount = [throwWorkList.length, 0, workList.length];
    setCountWork([...tmpCount]);

    if (sortType === "throw") {
      setSortWorkList([...throwWorkList]);
    } else if (sortType === "attend") {
    } else if (sortType === "all") {
      setSortWorkList([...workList]);
    } else if (sortType === "search") {
      console.log(searchInfo);
      //이후 서버통신을 통해 searchInfo를 던져주고 돌아온 []을 sortWorkList에 [...] 해주면 된다

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
