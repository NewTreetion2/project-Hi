import { MyCard } from "components";
import { useRecoilState } from "recoil";
import { dummyData } from "store";

export default function GetWork() {
  const [tempData, setTempData] = useRecoilState(dummyData);
  return (
    <MyCard
      title={tempData[1].title}
      text={tempData[1].text}
      imgSrc={tempData[1].src}
    />
  );
}
