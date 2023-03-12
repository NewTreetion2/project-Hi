import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.content}`}>
        <p className={`${styles.firstWord}`}>(주) Hi | 대표 : 박현웅</p>
        <p className={`${styles.secondWord}`}>
          Copyright © 2023 Hi Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
