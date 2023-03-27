import styles from "./SummaryBox.module.scss";

export default function SummaryBox({ img, text, func }) {
  return (
    <>
      <div className={`${styles.summaryContentTop}`}>
        <div className={`${styles.summaryContentLeft}`}>{img}</div>
        <div className={`${styles.summaryContentRight}`}>{text}</div>
      </div>
      <div className={`${styles.summaryContentDown}`}>{func}</div>
    </>
  );
}
