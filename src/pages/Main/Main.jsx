import styles from "./Main.module.scss";

import { MainCarousel, MyCard } from "components";
import TextAnimation from "components/TextAnimation/TextAnimation";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { workStatus } from "store";

import WorkApis from "apis/WorkApis";

const mainCarouArr = [
  {
    imgSrc: "img/carouselFirst.jpg",
    text: <TextAnimation text="환영합니다" />,
  },
  { imgSrc: "", text: "2번째 carousel입니다" },
  { imgSrc: "", text: "3번째 carousel입니다" },
];

//메인페이지 loginState에 따라 보여주는 화면이 달라진다
export default function Main() {
  const [workList, setWorkList] = useRecoilState(workStatus);
  const { GetWorkList } = WorkApis();
  const getWorkList = async () => {
    try {
      const res = await GetWorkList();
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const getAllWorkList = async () => {
      setWorkList(await getWorkList());
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
      </div>
    </div>
  );
}
