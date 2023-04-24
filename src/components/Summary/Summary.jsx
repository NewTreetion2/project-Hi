import styles from "./Summary.module.scss";
import SummaryBox from "components/SummaryBox/SummaryBox";

import { useRecoilState } from "recoil";

import { mypageSortType } from "store";

export default function Summary({ countArr }) {
  // func에는 현재 Worklist의 정보를 가져와 count를 보여주는 기능 1
  // onClick시 던져준 작업, 받은 작업, 등록순 등으로 sort해주는 기능 2

  const [sortType, setSortType] = useRecoilState(mypageSortType); // 들어갈 수 있는 타입은 throw(던져준 일), attend(참여한 일), all

  // 선택한 type을 리코일 전역변수로 저장
  const onClickHandler = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className={`${styles.summaryFunctionBox}`}>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect1.png" alt="rect1"></img>}
          text="던져준 일"
          value="throw"
          func={onClickHandler}
          count={countArr[0]}
        />
      </div>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect2.png" alt="rect2"></img>}
          text="받은 일"
          value="attend"
          func={onClickHandler}
          count={countArr[1]}
        />
      </div>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect3.png" alt="rect3"></img>}
          text="등록된 프로젝트"
          value="all"
          func={onClickHandler}
          count={countArr[2]}
        />
      </div>
    </div>
  );
}
