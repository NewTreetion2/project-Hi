import styles from "./MySelect.module.scss";

import { Form } from "react-bootstrap";

export default function MySelect({ id, arr, onChangeHandler }) {
  return (
    <Form.Select
      id={id}
      className={`${styles.select}`}
      onChange={onChangeHandler}
    >
      {arr.map((item, index) => {
        return (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        );
      })}
    </Form.Select>
  );
}
