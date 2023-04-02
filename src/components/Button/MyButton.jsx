import styles from "./MyButton.module.scss";

import { Button } from "react-bootstrap";
import "./MyButton.module.scss";

export default function MyButton({ disabled, text, onClickHandler }) {
  return (
    <Button
      disabled={disabled}
      className={`${styles.btnColor}`}
      onClick={onClickHandler}
    >
      {text}
    </Button>
  );
}
