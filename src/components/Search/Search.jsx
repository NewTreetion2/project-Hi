import styles from "./Search.module.scss";

import MySelect from "components/MySelect/MySelect";
import { useState } from "react";

const selectArr = [
  { value: "request", text: "던져준 일" },
  { value: "proceed", text: "받은 일" },
  { value: "all_project", text: "등록된 프로젝트" },
];
export default function Search() {
  const [searchState, setSearchState] = useState({
    project: "",
    date: "",
    text: "",
  });
  function onChangeHandler(e) {
    const tempOb = { ...searchState };
    if (e.target.id === "project") {
      tempOb.project = e.target.value;
      setSearchState(tempOb);
    } else if (e.target.id === "text") {
      tempOb.text = e.target.value;
      setSearchState(tempOb);
    } else if (e.target.id === "date") {
      tempOb.date = e.taget.value;
      setSearchState(tempOb);
    }
  }
  return (
    <div className={`${styles.searchBox}`}>
      <MySelect
        id="project"
        onChangeHandler={onChangeHandler}
        arr={selectArr}
      />
      <input
        className={`${styles.input}`}
        id="text"
        placeholder="검색어를 입력해주세요"
        onChange={onChangeHandler}
      />
    </div>
  );
}
