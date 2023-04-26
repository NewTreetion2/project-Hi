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
  { id: "트리션", src: "img/1__.mp3   " },
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

  // 서버에서 params에 들어있는 workNum의 해당하는 WorkDetail을 가지고 온다
  return (
    <div className={styles.workDetailMain}>
      <div className={styles.img}>
        <img src="../img/default_profile.png" alt="프로젝트 이미지" />
        {console.log(workList)}
        <div className={styles.attendBtn}>
          {isRegistrant ? (
            ""
          ) : (
            <MyButton
              onClickHandler={defineModalTypeAsFileUpload}
              text="프로젝트 참여하기"
            />
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
