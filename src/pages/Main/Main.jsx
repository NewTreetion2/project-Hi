import MyCard from "components/MyCard";
import MainCarousel from "components/Carousel/Main/MainCarousel";
import "./Main.css";

const mainCarouArr = [
  { imgSrc: "", text: "1번째 carousel입니다" },
  { imgSrc: "", text: "2번째 carousel입니다" },
  { imgSrc: "", text: "3번째 carousel입니다" },
];

const cardCarouArr = [
  {
    title: "1번 테스트입니다",
    text: "1번 테스트 내용",
    imgSrc: "이미지",
  },
  {
    title: "2번 테스트입니다",
    text: "2번 테스트 내용",
    imgSrc: "이미지",
  },
  {
    title: "3번 테스트입니다",
    text: "3번 테스트 내용",
    imgSrc: "이미지",
  },
  {
    title: "4번 테스트입니다",
    text: "4번 테스트 내용",
    imgSrc: "이미지",
  },
];

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  return (
    <div className="main">
      {/* Carousel은 {children} 으로 처리할 수 없을 것 같은데 방법을 찾아보자 어떻게 component와 할 수 있을까
      받아야 할 props는 interval, 각 아이템의 src, 내용
      객체로 [{src:"" , 내용은 <></>}] 배열처리해서 넘겨준다? */}
      <div className="siteIntro">
        <MainCarousel interval={2500} carouArr={mainCarouArr} />
      </div>

      <div className="cardListWrap">
        <p>현재 진행중인 오디션</p>
        <div className="cardList">
          {cardCarouArr.map((item) => (
            <MyCard title={item.title} text={item.text} imgSrc={item.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
