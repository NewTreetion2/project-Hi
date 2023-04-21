import { useEffect, useState } from "react";
import styles from "./WorkList.module.scss";

import WorkApis from "apis/WorkApis";

import { MyCard, WorkListFilter } from "components";

const { GetWorkList, GetWorkDetail } = WorkApis();

export default function WorkList() {
  const [workList, setWorkList] = useState();
  //! TODO: 비동기 이므로 try, catch 삽입할것
  const getWorkData = async () => {
    try {
      const res = await GetWorkDetail(1);
      console.log(res);
    } catch (err) {
      throw err;
    }
  };
  const getWorkList = async () => {
    try {
      const res = await GetWorkList();
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const temp = async () => {
      setWorkList(await getWorkList());
    };

    temp();
  }, []);

  return (
    <div className={styles.workListContainer}>
      <WorkListFilter />
      {console.log(workList)}
      <JobCardList workArr={workList} />
    </div>
  );
}

const JobCardList = ({ workArr }) => {
  console.log(workArr);
  return (
    <div className={`${styles.cardList}`}>
      {workArr.map((item, index) => (
        <MyCard
          key={index}
          title={item.title}
          text={item.content}
          imgSrc={"img/default_profile.png"} // TODO: 하드코딩, 변경 필요
        />
      ))}
    </div>
  );
};
