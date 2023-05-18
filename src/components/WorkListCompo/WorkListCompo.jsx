import { useNavigate } from "react-router-dom";
import styles from "./WorkListCompo.module.scss";
import { useEffect, useState } from "react";
import MyButton from "components/Button/MyButton";

export default function WorkListCompo({ workListObj }) {
  const [choiced, setChoiced] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (workListObj.choiced === true) setChoiced(true);
  // }, []);

  return (
    <div
      className={styles.workListBox}
      onClick={() => {
        navigate(`/work-Detail/${workListObj.postNo}`);
      }}
    >
      <div className={styles.imgWrapper}>
        <img src="img/default_profile.png" alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{workListObj.title}</h3>
          <div className={styles.date}>
            {choiced ? (
              <MyButton
                text="채택됨"
                onClickHandler={() => {
                  /*버튼 클릭 시 해당 클라이언트와의 대화창으로 이동*/
                }}
              ></MyButton>
            ) : (
              ""
            )}
            {workListObj.registrationDate}
          </div>
        </div>
        <div className={styles.content}>{workListObj.content}</div>
      </div>
    </div>
  );
}
