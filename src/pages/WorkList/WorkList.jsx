import { useMemo } from "react";
import styles from "./WorkList.module.scss";

import WorkApis from "apis/WorkApis";

import { MyCard, WorkListFilter } from "components";

export default function WorkList() {
  const { GetWorkList, GetWorkDetail } = WorkApis();
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
      console.log(res);
    } catch (err) {
      throw err;
    }
  };

  getWorkList();

  return (
    <div className={styles.workListContainer}>
      <WorkListFilter />
      <JobCardList />
    </div>
  );
}

const JobCardList = () => {
  const tmpCardListData = useMemo(() => {
    return [
      {
        title: "1번 테스트입니다",
        text: "1번 테스트 내용",
        imgSrc: "이미지",
      },
      {
        title: "2번 테스트입니다",
        text: "2번 테스트 내용",
        imgSrc: "이미지",
      },
      {
        title: "3번 테스트입니다",
        text: "3번 테스트 내용",
        imgSrc: "이미지",
      },
      {
        title: "4번 테스트입니다",
        text: "4번 테스트 내용",
        imgSrc: "이미지",
      },
    ];
  }, []);

  return (
    <div className={`${styles.cardList}`}>
      {tmpCardListData.map((item, index) => (
        <MyCard
          key={index}
          title={item.title}
          text={item.text}
          imgSrc={"img/default_profile.png"} // TODO: 하드코딩, 변경 필요
        />
      ))}

      {tmpCardListData.map((item, index) => (
        <MyCard
          key={index}
          title={item.title}
          text={item.text}
          imgSrc={"img/default_profile.png"} // TODO: 하드코딩, 변경 필요
        />
      ))}

      {tmpCardListData.map((item, index) => (
        <MyCard
          key={index}
          title={item.title}
          text={item.text}
          imgSrc={"img/default_profile.png"} // TODO: 하드코딩, 변경 필요
        />
      ))}

      {tmpCardListData.map((item, index) => (
        <MyCard
          key={index}
          title={item.title}
          text={item.text}
          imgSrc={"img/default_profile.png"} // TODO: 하드코딩, 변경 필요
        />
      ))}
    </div>
  );
};
