import { MyCard } from "components";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { dummyData } from "store";

export default function GetWork() {
  const [temp, setTemp] = useRecoilState(dummyData);
  const reset = useResetRecoilState(dummyData);
  const tempArr = [];
  useEffect(() => {
    tempArr.push(
      <MyCard title={temp[0].title} text={temp[0].text} imgSrc={temp[0].src} />
    );
    reset();
  }, [setTemp]);
  console.log(temp);

  tempArr.map((item) => {
    return <div>{item}</div>;
  });
}
