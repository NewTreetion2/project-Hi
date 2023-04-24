import styles from "./SummaryBox.module.scss";

export default function SummaryBox({ img, text, func, value, count }) {
  return (
    <>
      <div className={`${styles.summaryContentTop}`}>
        <div className={`${styles.summaryContentLeft}`}>{img}</div>
        <div className={`${styles.summaryContentRight}`}>{text}</div>
      </div>
      <div className={`${styles.summaryContentDown}`}>
        <button onClick={func} value={value}>
          {count}
        </button>
      </div>
    </>
  );
}
