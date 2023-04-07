import Comment from "components/Comment/Comment";
import styles from "./WorkDetail.module.scss";

import { useParams } from "react-router-dom";
import MyButton from "components/Button/MyButton";
import { useModalControl } from "hooks";
import { useState } from "react";

export default function WorkDetail() {
  const params = useParams();
  const { defineModalTypeAsFileUpload } = useModalControl();
  const [isRegistrant, setIsRegistrant] = useState(false);

  // 서버에서 params에 들어있는 workNum의 해당하는 WorkDetail을 가지고 온다
  const workData = {
    title: "느낌있는 아역 찾습니다",
    content: "어린이 목소리를 찾습니다",
    notes: { price: 10000, days: 7, recordingPlace: "Home" },
  };

  return (
    <div className={styles.workDetailMain}>
      <div className={styles.img}>
        <img src="../img/default_profile.png" alt="프로젝트 이미지" />
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
        {isRegistrant ? (
          <div className={styles.btns}>
            <MyButton text="완료" />
            <MyButton text="삭제" />
            <MyButton text="수정" />
          </div>
        ) : (
          ""
        )}
        <div className={styles.title}>{workData.title}</div>
        <div className={styles.content}>{workData.content}</div>
        <div className={styles.notes}>
          <p className={styles.item}>{workData.notes.price}원</p>
          <p className={styles.item}>{workData.notes.days}일</p>
          <p className={styles.item}>{workData.notes.recordingPlace}</p>
          <p className={styles.item}>
            현재 프로젝트 고유 넘버는 {params.workNum} 입니다
          </p>
        </div>
        {isRegistrant ? (
          <div className={styles.comment}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
