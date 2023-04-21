import styles from "./WorkList.module.scss";

import { MyCard, WorkListFilter } from "components";
import { useRecoilValue } from "recoil";
import { workStatus } from "store";

export default function WorkList() {
  const workList = useRecoilValue(workStatus);
  //! TODO: 비동기 이므로 try, catch 삽입할것

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
