import UserApis from "apis/UserApis";
import styles from "./Profile.module.scss";

import MyButton from "components/Button/MyButton";

import { useModalControl } from "hooks";
import { useEffect } from "react";

const { GetProfileImg } = UserApis();

export default function Profile({ user }) {
  const { defineModalTypeAsImgUpload } = useModalControl();
  console.log(user);

  const getUserProfileImg = async () => {
    try {
      const res = await GetProfileImg(user.mbNo);
      console.log(res);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getUserProfileImg();
  });

  return (
    <>
      <div className={`${styles.profile}`}>
        <img
          className={`${styles.profileImg}`}
          src="img/default_profile.png"
          alt="프로필 디폴트 이미지"
        />
      </div>
      <div className={`${styles.userName}`}>{user.name}</div>
      <div className={`${styles.profileImgChangeBtn}`}>
        <MyButton
          text="프로필 사진 변경"
          onClickHandler={defineModalTypeAsImgUpload}
        />
      </div>
    </>
  );
}
