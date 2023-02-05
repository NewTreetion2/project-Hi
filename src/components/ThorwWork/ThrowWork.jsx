import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function ThrowWork() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>이미지를 선택해주세요</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="오디션 이름을 입력해주세요" />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="내용을 입력해주세요"
          rows={3}
        />
      </Form.Group>

      <Row className="mb-3">
        선택해주세요
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="홈 레코딩" id="Home" />
          <Form.Check type="checkbox" label="스튜디오" id="Studio" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
