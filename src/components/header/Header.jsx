import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <p>박현웅의 페이지입니다</p>
    </header>
  );
}
