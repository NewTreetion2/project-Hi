import Comment from "components/Comment/Comment";
import styles from "./WorkDetail.module.scss";

import MyButton from "components/Button/MyButton";
import { useModalControl } from "hooks";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { workStatus } from "store";
import { signInUser } from "store";

const tmpComment = [
  {
    id: "트리션",
    src: "https://vo-fileserver.s3.ap-northeast-2.amazonaws.com/post/image/_20230427023103%5BLjava.lang.String%3B%40764fe956",
  },
  { id: "가렌", src: "정의의 전장으로.mp3" },
  { id: "다리우스", src: "녹서스의 단두대.mp3" },
];

export default function WorkDetail() {
  const params = useParams();
  const { defineModalTypeAsFileUpload } = useModalControl();
  const [isRegistrant, setIsRegistrant] = useState(false);
  const signInUserInfo = useRecoilValue(signInUser);
  const workList = useRecoilValue(workStatus);
  const WorkNumber = params.workNum - 1;

  useEffect(() => {
    if (workList[WorkNumber].memberNo === signInUserInfo.mbNo) {
      setIsRegistrant(true);
    }
  }, [setIsRegistrant]);

  const scriptDownload = () => {
    const tmpScript =
      "https://vo-fileserver.s3.ap-northeast-2.amazonaws.com/post/script/_20230427031023dddd%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8%20%282%29.hwp";
    window.location.href = tmpScript;
  };

  // 서버에서 params에 들어있는 workNum의 해당하는 WorkDetail을 가지고 온다
  return (
    <div className={styles.workDetailMain}>
      <div className={styles.img}>
        <img src="../img/default_profile.png" alt="프로젝트 이미지" />
        {console.log(workList)}
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
          {workList[WorkNumber].title}
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
        <div className={styles.content}>{workList[WorkNumber].content}</div>
        <div className={styles.notes}>
          <p className={styles.item}>{workList[WorkNumber].price}원</p>
          <p className={styles.item}>{workList[WorkNumber].closingDate}</p>
          <p className={styles.item}>
            {workList[WorkNumber].recordingPlace === "01" ? "스튜디오" : "홈"}
          </p>
          <p className={styles.item}>
            현재 프로젝트 고유 넘버는 {params.workNum} 입니다
          </p>
        </div>

        {isRegistrant ? (
          <div className={styles.comment}>
            {tmpComment.map((item, index) => {
              return <Comment key={index} userInfo={item} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
