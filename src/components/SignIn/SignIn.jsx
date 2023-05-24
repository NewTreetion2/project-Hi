import styles from "./SignIn.module.scss";

import UserApis from "apis/UserApis";

import { useRecoilState, useSetRecoilState } from "recoil";

import { useInput, useModalControl } from "hooks";
import { useMemo } from "react";
import MyButton from "components/MyButton/MyButton";
import { userDataState } from "store";

import { setSessionStorage } from "utils";
import { USER_STORAGE_KEY } from "constant";

export default function SignIn() {
  const [inputId, setInputId] = useInput();
  const [inputPw, setInputPw] = useInput();
  const { handleModalClose } = useModalControl();
  const { SignInUser, SignInUserData } = UserApis();
  const setUserData = useSetRecoilState(userDataState);

  // memos
  const isActive = useMemo(() => {
    return inputId.length && inputPw.length;
  }, [inputId, inputPw]);

  const handleUserData = (data) => {
    setUserData(data);
    setSessionStorage(USER_STORAGE_KEY, data);
  };

  const checkValidation = async () => {
    try {
      const res = await SignInUser(inputId, inputPw);
      const userData = await SignInUserData(inputId);

      if (res.status === "SUCCESS") {
        handleModalClose();
        handleUserData(userData.data);

        alert("로그인 성공");
      } else {
        alert(`아이디 혹은 비밀번호를 확인해주세요`);
      }
    } catch (e) {
      alert("로그인오류입니다");
    }
  };

  const enterPress = (e) => {
    if (!isActive) return;

    if (e.key === "Enter") checkValidation();
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.boldText}>로그인</div>
      <div>
        <input
          className={styles.input}
          type="text"
          value={inputId || ""}
          onChange={setInputId}
          onKeyUp={enterPress}
          placeholder="아이디를 입력해주세요."
          autoFocus
        />
        <input
          className={styles.input}
          type="password"
          value={inputPw || ""}
          onChange={setInputPw}
          onKeyUp={enterPress}
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className={styles.submit}>
        <MyButton
          disabled={!isActive}
          onClickHandler={checkValidation}
          text="Sign In"
        />
      </div>
    </div>
  );
}

// 이 부분 컴포넌트로 바꿀만한 부분이 있을지?
// sign up도 마찬가지
// input이나 로직부분을 컴포넌트화 가능할지 고민해보자
// SignUp 과 기능차이는 많이 나지만 css등 기본골자는 비슷하다
// 어떻게든 합칠 방법은 없을지?
