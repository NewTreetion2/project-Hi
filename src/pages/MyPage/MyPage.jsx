import { useEffect, useState } from "react";

import { Menu, Profile, Summary, Search, WorkListCompo } from "components";

import { useRecoilState, useRecoilValue } from "recoil";

import { getSessionStorage } from "utils";
import { USER_STORAGE_KEY } from "constant";

import {
  userDataState,
  mypageSortType,
  workStatus,
  mypageSearchStatus,
} from "store";

import WorkApis from "apis/WorkApis";

import styles from "./MyPage.module.scss";

const formData = new FormData();

export default function MyPage() {
  const searchInfo = useRecoilValue(mypageSearchStatus);

  const [sortType, setSortType] = useRecoilState(mypageSortType);
  const [workList, setWorkList] = useRecoilState(workStatus);
  const [userData, setUserData] = useRecoilState(userDataState);

  const [sortWorkList, setSortWorkList] = useState([...workList]);
  const [countWork, setCountWork] = useState([]);
  const [throwWorkList, setThrowWorkList] = useState([]);

  const { GetWorkList } = WorkApis();

  const getUserWorkList = async () => {
    const sessionUserData = getSessionStorage(USER_STORAGE_KEY);
    if (sessionUserData === null) return;
    setUserData(sessionUserData);

    try {
      formData.append("mbNo", sessionUserData.mbNo);
      const res = await GetWorkList(formData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const handleWorkList = async () => {
    const emptyFormData = new FormData();
    try {
      const res = await GetWorkList(emptyFormData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (workList.length === 0) {
      const getAllWorkList = async () => {
        try {
          setWorkList(await handleWorkList());
        } catch (err) {
          alert("메인에서 서버오류");
          throw err;
        }
      };

      getAllWorkList();
    }
    // const attendWorkList =
    const setUserWorkList = async () => {
      try {
        const res = await getUserWorkList();
        setThrowWorkList(res);
      } catch (err) {
        alert("유저 워크리스트 서버 통신 오류");
        throw err;
      }
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
  }, [sortType, workList, setSortWorkList, setThrowWorkList]);

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.infoMenuBox}`}>
        <div className={`${styles.userInfo}`}>
          <Profile user={userData ? userData : ""} />
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
