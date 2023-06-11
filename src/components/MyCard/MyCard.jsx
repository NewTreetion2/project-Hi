import { Card } from "react-bootstrap";

import { MyButton } from "components";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userDataState } from "store";

import styles from "./MyCard.module.scss";

export default function MyCard({ postNo, title, text, imgSrc }) {
  const navigate = useNavigate();
  const userData = useRecoilValue(userDataState);
  const goDetail = () => {
    if (userData) {
      navigate(`/work-detail/${postNo}`);
    } else {
      // 로그인창 띄우기
      alert("로그인을 해주세요");
    }
  };

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <div className={styles.title}>
          <Card.Title>{title}</Card.Title>
        </div>
        <div className={styles.text}>
          <Card.Text>{text}</Card.Text>
        </div>
        <div className={styles.button}>
          <MyButton text={"Go somewhere"} onClickHandler={goDetail} />
        </div>
      </Card.Body>
    </Card>
  );
}
