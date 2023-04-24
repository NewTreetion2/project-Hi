import { useNavigate } from "react-router-dom";
import styles from "./WorkListCompo.module.scss";

export default function WorkListCompo({ workListObj }) {
  const navigate = useNavigate();
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
          <div className={styles.date}>{workListObj.registrationDate}</div>
        </div>
        <div className={styles.content}>{workListObj.content}</div>
      </div>
    </div>
  );
}
