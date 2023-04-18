import UserApis from "apis/UserApis";
import styles from "./Profile.module.scss";

import MyButton from "components/Button/MyButton";

import { useModalControl } from "hooks";
import { useEffect, useState } from "react";

const { GetProfileImg } = UserApis();

export default function Profile({ user }) {
  const { defineModalTypeAsImgUpload } = useModalControl();
  const [userImg, setUserImg] = useState();

  const ByteToUrl = (byteArray) => {
    const blob = new Blob(byteArray, { type: "image/*" });
    console.log(blob);
    const url = URL.createObjectURL(blob);
    const newUrl = url.replace("blob:", "");
    setUserImg(newUrl);
    return () => URL.revokeObjectURL(url);
  };

  const getUserProfileImg = async () => {
    try {
      const res = await GetProfileImg(user.mbNo);
      ByteToUrl(res);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getUserProfileImg();
  }, [setUserImg]);

  return (
    <>
      <div className={`${styles.profile}`}>
        {console.log(userImg)}
        {userImg ? (
          <img
            className={`${styles.profileImg}`}
            src={userImg}
            alt="프로필 이미지"
          />
        ) : (
          <img
            className={`${styles.profileImg}`}
            src="img/default_profile.png"
            alt="프로필 디폴트 이미지"
          />
        )}
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
