import { MyCard } from "components";
import { useRecoilValue } from "recoil";
import { dummyData } from "store";

export default function WorkList() {
  const temp = useRecoilValue(dummyData);

  return temp.map((item, index) => (
    <MyCard key={index} title={item.title} text={item.text} imgSrc={item.src} />
  ));
}
