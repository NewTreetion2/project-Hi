import "css/Main.css";
import { Button, Card } from "react-bootstrap";

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  return (
    <div className="main">
      <img className="mainBackground" src="img/micimg.jpg" alt="마이크이미지" />
      <div className="cardList">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>테스트</Card.Title>
            <Card.Text>1번 테스트입니다</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>테스트</Card.Title>
            <Card.Text>2번 테스트입니다</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>테스트</Card.Title>
            <Card.Text>3번 테스트입니다</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>테스트</Card.Title>
            <Card.Text>4번 테스트입니다</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* 카드 컴포넌트 제작 후 <Card title, text, img로만 받을 수 있게 제작 */}
      </div>
    </div>
  );
}
