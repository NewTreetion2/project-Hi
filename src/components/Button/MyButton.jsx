import styles from "./MyButton.module.scss";

import { Button } from "react-bootstrap";
import "./MyButton.module.scss";

export default function MyButton({ text, onClickHandler }) {
  return (
    <Button className={`${styles.btnColor}`} onClick={onClickHandler}>
      {text}
    </Button>
  );
}
