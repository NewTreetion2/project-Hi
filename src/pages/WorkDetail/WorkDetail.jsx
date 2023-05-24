import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Comment, MyButton } from "components";

import { useModalControl } from "hooks";

import { getSessionStorage } from "utils";
import { USER_STORAGE_KEY } from "constant";

import WorkApis from "apis/WorkApis";

import styles from "./WorkDetail.module.scss";

export default function WorkDetail() {
  const params = useParams();
  const workNumber = params.workNum;

  const { defineModalTypeAsFileUpload } = useModalControl();

  const { GetWorkDetail } = WorkApis();

  const [userData, setUserData] = useState(getSessionStorage(USER_STORAGE_KEY));
  const [detailInfo, setDetailInfo] = useState({
    title: "",
    mbNo: "",
    content: "",
    price: "",
    closingDate: "",
    recordingPlace: "",
  });

  const isRegistrant = useMemo(() => {
    return detailInfo.mbNo === userData.mbNo;
  }, [userData, detailInfo]);

  const getWorkInfo = async () => {
    try {
      const res = await GetWorkDetail(workNumber);
      console.log(res);
      return res.data;
    } catch (err) {
      alert("디테일에서 서버통신 오류");
      throw err;
    }
  };

  useEffect(() => {
    const setWorkInfo = async () => {
      try {
        setDetailInfo(await getWorkInfo());
      } catch (err) {
        alert("useEffect안에서 통신오류");
        throw err;
      }
    };

    setWorkInfo();
  }, []);

  const scriptDownload = () => {
    const tmpScript =
      "https://vo-fileserver.s3.ap-northeast-2.amazonaws.com/post/script/_20230427031023dddd%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8%20%282%29.hwp";
    window.location.href = tmpScript;
  };

  // 서버에서 params에 들어있는 workNum의 해당하는 WorkDetail을 가지고 온다
  return (
    <div className={styles.workDetailMain}>
      {console.log(detailInfo)}
      {console.log(userData)}

      <div className={styles.img}>
        <img src="../img/default_profile.png" alt="프로젝트 이미지" />
        <div>
          {isRegistrant ? (
            ""
          ) : (
            <div className={styles.attendBtn}>
              <MyButton
                onClickHandler={defineModalTypeAsFileUpload}
                text="프로젝트 참여하기"
              />
              <MyButton onClickHandler={scriptDownload} text="대본 다운받기" />
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {detailInfo.title}
          {isRegistrant ? (
            <div className={styles.btns}>
              <MyButton text="완료" />
              <MyButton text="삭제" />
              <MyButton text="수정" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.content}>{detailInfo.content}</div>
        <div className={styles.notes}>
          <p className={styles.item}>{detailInfo.price}원</p>
          <p className={styles.item}>{detailInfo.closingDate}</p>
          <p className={styles.item}>
            {detailInfo.recordingPlace === "01" ? "스튜디오" : "홈"}
          </p>
          <p className={styles.item}>
            현재 프로젝트 고유 넘버는 {params.workNum} 입니다
          </p>
        </div>

        {isRegistrant ? (
          <div className={styles.comment}>
            {detailInfo.commentList.length
              ? detailInfo.commentList.map((item, index) => {
                  return <Comment key={index} userInfo={item} />;
                })
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
