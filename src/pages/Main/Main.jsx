import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { workStatus } from "store";

import { MainCarousel, MyCard, TextAnimation } from "components"; // TODO

import WorkApis from "apis/WorkApis";

import styles from "./Main.module.scss";

const mainCarouArr = [
  {
    imgSrc: "img/carouselFirst.jpg",
    text: (
      <div
        style={{
          display: "flex",
          width: "1075px",
          height: "350px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: "1",
            fontSize: "60px",
            display: "flex",
            justifyContent: "left",
            marginLeft: "150px",
          }}
        >
          <TextAnimation text="당신의 목소리를       " />
        </div>
        <div
          style={{
            flex: "1",
            fontSize: "60px",
            display: "flex",
            justifyContent: "left",
            marginLeft: "600px",
          }}
        >
          <TextAnimation text="         보여주세요 " />
        </div>
      </div>
    ),
  },
  { imgSrc: "img/micimg.jpg", text: "2번째 carousel입니다" },
  { imgSrc: "img/logoCharacter.png", text: "3번째 carousel입니다" },
];

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  const [workList, setWorkList] = useRecoilState(workStatus);
  const { GetWorkList } = WorkApis();
  const formData = new FormData();

  const handleWorkList = async () => {
    try {
      const res = await GetWorkList(formData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const getAllWorkList = async () => {
      try {
        setWorkList(await handleWorkList());
      } catch (err) {
        alert("메인에서 서버오류");
        throw err;
      }
    };

    getAllWorkList();
  }, []);

  return (
    <div className={`${styles.main}`}>
      {/* Carousel은 {children} 으로 처리할 수 없을 것 같은데 방법을 찾아보자 어떻게 component와 할 수 있을까
      받아야 할 props는 interval, 각 아이템의 src, 내용
      객체로 [{src:"" , 내용은 <></>}] 배열처리해서 넘겨준다? */}
      <div className={`${styles.carousel}`}>
        <MainCarousel interval={50000} carouArr={mainCarouArr} />
      </div>

      <div className={`${styles.cardListWrap}`}>
        <p>현재 진행중인 오디션</p>
        <CardList workList={workList} />
      </div>
    </div>
  );
}

// 최초1회만 렌더됨
const CardList = React.memo(({ workList }) => {
  return (
    <div className={`${styles.cardList}`}>
      {workList.map((item, index) => (
        <MyCard
          postNo={item.postNo}
          key={index}
          title={item.title}
          text={item.content}
          imgSrc={"img/default_profile.png"}
        />
      ))}
    </div>
  );
});
