import styles from "./WorkListFilter.module.scss";
import "react-datepicker/dist/react-datepicker.css";

//! TODO: 왜 컴포넌트를 그대로?? , 다른것들은 컴포넌트의 index에서 가져옴
import MySelect from "components/MySelect/MySelect";
import MyButton from "components/MyButton/MyButton";

import { useWorkListFilter } from "hooks";

const categoryArr = [
  { value: "all", text: "전체" },
  { value: "animation", text: "애니메이션" },
  { value: "advert", text: "광고" },
  { value: "game", text: "게임" },
  { value: "narration", text: "내레이션" },
];

const priceArr = [
  { value: "all", text: "전체" },
  { value: "0", text: "500,000원 이상" },
  { value: "50", text: "500,000원 미만" },
  { value: "20", text: "200,000원 미만" },
  { value: "10", text: "100,000원 미만" },
  { value: "5", text: "50,000원 미만" },
  { value: "3", text: "30,000원 미만" },
];

export default function Filter() {
  const {
    categoryFilter,
    priceFilter,
    handleCategoryChange,
    handlePriceChange,
  } = useWorkListFilter();

  console.log(categoryFilter, priceFilter);

  return (
    <div className={styles.selectorcontainer}>
      <div className={styles.selectorWrapper}>
        <p className={styles.selectExplaneText}>카테고리</p>
        <MySelect
          id="recordingType"
          onChangeHandler={handleCategoryChange}
          arr={categoryArr}
        />
      </div>

      <div className={styles.selectorWrapper}>
        <p className={styles.selectExplaneText}>금액</p>
        <MySelect
          id="price"
          onChangeHandler={handlePriceChange}
          arr={priceArr}
        />
      </div>

      <div className={`${styles.commitBtn}`}>
        <MyButton onClickHandler={() => {}} text="조회" />
      </div>
    </div>
  );
}
