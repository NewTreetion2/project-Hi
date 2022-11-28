import { CardList } from "../";
import styles from "./Contents.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Contents() {
  return (
    <div className={cx("contents")}>
      <CardList />
    </div>
  );
}
