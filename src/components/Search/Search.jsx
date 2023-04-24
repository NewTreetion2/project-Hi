import styles from "./Search.module.scss";

import MyButton from "components/Button/MyButton";
import MySelect from "components/MySelect/MySelect";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { mypageSortType, mypageSearchStatus } from "store";

const selectArr = [
  { value: "throw", text: "던져준 일" },
  { value: "attend", text: "받은 일" },
  { value: "all", text: "등록된 프로젝트" },
];

export default function Search() {
  const changeDateForm = (day) => {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();

    const formChangeDate = `${year}${month < 10 ? "0" : ""}${month}${
      date < 10 ? "0" : ""
    }${date}`;

    return formChangeDate;
  };
  const setSortType = useSetRecoilState(mypageSortType);
  const setSearchInfo = useSetRecoilState(mypageSearchStatus);
  const [searchState, setSearchState] = useState({
    type: "",
    text: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // function onChangeHandler(e) {
  //   const tempOb = { ...searchState };
  //   if (e.target.id === "project") {
  //     tempOb.project = e.target.value;
  //     setSearchState(tempOb);
  //   } else if (e.target.id === "text") {
  //     tempOb.text = e.target.value;
  //     setSearchState(tempOb);
  //   }
  // }

  function onChangeHandler(e) {
    const { id, value } = e.target;

    setSearchState({
      ...searchState,
      [id]: value,
    });
  }

  function onClickHandler() {
    //서버에 searchState.project , searchState.text, startDate, endDate를 보내 프로젝트를 조회 후 시간 순으로 정렬
    setSortType("search");
    setSearchInfo({
      type: searchState.type,
      text: searchState.text,
      startDate: changeDateForm(startDate),
      endDate: changeDateForm(endDate),
    });
  }
  return (
    <div className={`${styles.searchBox}`}>
      <MySelect id="type" onChangeHandler={onChangeHandler} arr={selectArr} />
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={`${styles.startDate}`}
        />
      </div>

      <div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className={`${styles.endDate}`}
        />
      </div>

      <input
        className={`${styles.input}`}
        id="text"
        placeholder="프로젝트 이름을 입력해주세요"
        onChange={onChangeHandler}
      />
      <div className={`${styles.commitBtn}`}>
        <MyButton onClickHandler={onClickHandler} text="조회" />
      </div>
    </div>
  );
}
