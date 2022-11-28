import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "../../img/background.PNG";
import { useRecoilState } from "recoil";
import { isModalView } from "../../store";

function ContentCard({ title, text }) {
  const [modalShow, setModalShow] = useRecoilState(isModalView);
  const togleModalShow = () => {
    setModalShow(!modalShow);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={background} alt="이미지" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button onClick={togleModalShow} variant="primary">
          이동하기
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;
