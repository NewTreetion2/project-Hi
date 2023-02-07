import { useRecoilValue } from "recoil";
import { dummyData } from "store";

export default function GetWork() {
  const dummy = useRecoilValue(dummyData);
  const dummyUserData = [...dummy];
  console.log(dummyUserData);

  return <p> src : {dummyUserData[1].userTitle}</p>;
}
