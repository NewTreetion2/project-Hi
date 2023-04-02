import styles from "./Search.module.scss";

import MySelect from "components/MySelect/MySelect";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import MyButton from "components/Button/MyButton";

const selectArr = [
  { value: "request", text: "던져준 일" },
  { value: "proceed", text: "받은 일" },
  { value: "all_project", text: "등록된 프로젝트" },
];
export default function Search() {
  const [searchState, setSearchState] = useState({
    project: "",
    text: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(searchState);

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
  }
  return (
    <div className={`${styles.searchBox}`}>
      <MySelect
        id="project"
        onChangeHandler={onChangeHandler}
        arr={selectArr}
      />
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
        placeholder="검색어를 입력해주세요"
        onChange={onChangeHandler}
      />
      <div className={`${styles.commitBtn}`}>
        <MyButton onClickHandler={onClickHandler} text="조회" />
      </div>
    </div>
  );
}
