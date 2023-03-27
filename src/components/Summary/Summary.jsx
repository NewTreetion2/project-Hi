import styles from "./Summary.module.scss";
import SummaryBox from "components/SummaryBox/SummaryBox";

export default function Summary() {
  return (
    <>
      <div className={`${styles.summaryFunctionBox}`}>
        <div className={`${styles.summaryContent}`}>
          <SummaryBox img="1" text="진행중" func="3" />
        </div>
        <div className={`${styles.summaryContent}`}>
          <SummaryBox img="1" text="작업 발송중" func="3" />
        </div>
        <div className={`${styles.summaryContent}`}>
          <SummaryBox img="1" text="취소·문제 해결" func="3" />
        </div>
        <div className={`${styles.summaryContent}`}>4</div>
      </div>
    </>
  );
}
