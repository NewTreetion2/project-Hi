import { Card, Button } from "react-bootstrap";

export default function MyCard({ title, text, imgSrc }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
