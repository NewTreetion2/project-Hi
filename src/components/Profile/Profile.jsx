import UserApis from "apis/UserApis";
import styles from "./Profile.module.scss";

import MyButton from "components/Button/MyButton";

import { useModalControl } from "hooks";
import { useEffect, useState } from "react";

const { GetProfileImg } = UserApis();

export default function Profile({ user }) {
  const { defineModalTypeAsImgUpload } = useModalControl();
  const [userImg, setUserImg] = useState();

  const getUserProfileImg = async () => {
    try {
      const res = await GetProfileImg(user.mbNo);
      if (res.data !== "") {
        const dataType = "data:image/*;base64,";
        const url = dataType + res.data;
        setUserImg(url);
      } else {
        setUserImg(null);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (user.mbNo !== undefined) {
      getUserProfileImg();
    }
  }, [setUserImg, getUserProfileImg]);

  return (
    <>
      <div className={`${styles.profile}`}>
        <img
          className={`${styles.profileImg}`}
          src={userImg ? `${userImg}` : "img/default_profile.png"}
          alt="프로필 이미지"
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
