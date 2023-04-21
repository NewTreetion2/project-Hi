import { Card } from "react-bootstrap";
import MyButton from "components/Button/MyButton";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginStatus } from "store";

export default function MyCard({ postNo, title, text, imgSrc }) {
  const navigate = useNavigate();
  const login = useRecoilValue(loginStatus);
  const goDetail = () => {
    if (login === false) {
      alert("로그인을 해주세요");
    } else {
      navigate(`/work-detail/${postNo}`);
    }
  };

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <MyButton text={"Go somewhere"} onClickHandler={goDetail} />
      </Card.Body>
    </Card>
  );
}
