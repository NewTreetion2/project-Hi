import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { MyCard, WorkListFilter } from "components";

import { workStatus } from "store";

import WorkApis from "apis/WorkApis";

import styles from "./WorkList.module.scss";

export default function WorkList() {
  const [workList, setWorkList] = useRecoilState(workStatus);
  //! TODO: 비동기 이므로 try, catch 삽입할것
  const formData = new FormData();
  const { GetWorkList } = WorkApis();

  const getWorkList = async () => {
    try {
      const res = await GetWorkList(formData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (workList.length) return;
    else {
      const getAllWorkList = async () => {
        try {
          setWorkList(await getWorkList());
        } catch (err) {
          throw err;
        }
      };

      getAllWorkList();
    }
  }, [workList]);

  return (
    <div className={styles.workListContainer}>
      <WorkListFilter />
      <JobCardList workArr={workList} />
    </div>
  );
}

const JobCardList = ({ workArr }) => {
  return (
    <div className={`${styles.cardList}`}>
      {workArr.map((item, index) => (
        <MyCard
          key={index}
          postNo={item.postNo}
          title={item.title}
          text={item.content}
          imgSrc={"img/default_profile.png"}
          // TODO: 하드코딩, 변경 필요
        />
      ))}
    </div>
  );
};
