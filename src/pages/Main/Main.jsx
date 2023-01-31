import MyCard from "components/MyCard";
import { Carousel } from "react-bootstrap";
import "./Main.css";

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  return (
    <div className="main">
      {/* Carousel은 {children} 으로 처리할 수 없을 것 같은데 방법을 찾아보자 어떻게 component와 할 수 있을까
      받아야 할 props는 interval, 각 아이템의 src, 내용
      객체로 [{src:"" , 내용은 <></>}] 배열처리해서 넘겨준다? */}
      <div className="siteIntro">
        <Carousel interval={2500}>
          <Carousel.Item>
            <img className="d-block w-100 h-73" src="" alt="First slide" />
            <Carousel.Caption>
              <h3>당신의 목소리를 들려주세요</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-73" src="" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-73"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cardListWrap">
        <p>현재 진행중인 오디션</p>
        <div className="cardList">
          <MyCard
            title={"1번 테스트입니다"}
            text={"1번 테스트 내용"}
            img={"이미지"}
          />
          <MyCard
            title={"2번 테스트입니다"}
            text={"2번 테스트 내용"}
            img={"이미지"}
          />
          <MyCard
            title={"3번 테스트입니다"}
            text={"3번 테스트 내용"}
            img={"이미지"}
          />
          <MyCard
            title={"4번 테스트입니다"}
            text={"4번 테스트 내용"}
            img={"이미지"}
          />
        </div>

        {/* 카드 컴포넌트 제작 후 <Card title, text, img로만 받을 수 있게 제작 */}
      </div>
    </div>
  );
}
