import styles from "./Profile.module.scss";
import MyButton from "components/Button/MyButton";

export default function Profile() {
  return (
    <>
      <div className={`${styles.profile}`}>
        <img
          className={`${styles.profileImg}`}
          src="img/default_profile.png"
          alt="프로필 디폴트 이미지"
        />
      </div>
      <div className={`${styles.userName}`}>트리션</div>
      <div className={`${styles.profileImgChangeBtn}`}>
        <MyButton text="프로필 사진 변경" />
      </div>
    </>
  );
}
