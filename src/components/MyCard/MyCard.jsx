import { Card } from "react-bootstrap";
import MyButton from "components/Button/MyButton";

export default function MyCard({ title, text, imgSrc }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <MyButton text={"Go somewhere"} />
      </Card.Body>
    </Card>
  );
}
