import styles from "./Summary.module.scss";
import SummaryBox from "components/SummaryBox/SummaryBox";

export default function Summary() {
  // func에는 현재 Worklist의 정보를 가져와 count를 보여주는 기능 1
  // onClick시 던져준 작업, 받은 작업, 등록순 등으로 sort해주는 기능 2
  return (
    <div className={`${styles.summaryFunctionBox}`}>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect1.png" alt="rect1"></img>}
          text="던져준 일"
          func="3"
        />
      </div>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect2.png" alt="rect2"></img>}
          text="받은 일"
          func="3"
        />
      </div>
      <div className={`${styles.summaryContent}`}>
        <SummaryBox
          img={<img src="img/rect3.png" alt="rect3"></img>}
          text="등록된 프로젝트"
          func="3"
        />
      </div>
      <div className={`${styles.summaryContent}`}>4</div>
    </div>
  );
}
