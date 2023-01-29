import MyCard from "components/MyCard";
import "css/Main.css";

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  return (
    <div className="main">
      <img className="mainBackground" src="img/micimg.jpg" alt="마이크이미지" />
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
          img={"이미지1"}
        />

        {/* 카드 컴포넌트 제작 후 <Card title, text, img로만 받을 수 있게 제작 */}
      </div>
    </div>
  );
}
