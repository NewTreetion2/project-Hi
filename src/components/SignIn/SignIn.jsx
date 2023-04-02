import styles from "./SignIn.module.scss";

import LoginApis from "apis/LoginApis";

import { useRecoilState } from "recoil";

import { loginStatus } from "store";

import { useInput, useModalControl } from "hooks";
import { useEffect, useState } from "react";
import MyButton from "components/Button/MyButton";

export default function SignIn() {
  const [inputId, setInputId] = useInput();
  const [inputPw, setInputPw] = useInput();
  const { handleModalClose } = useModalControl();
  const [login, setLogin] = useRecoilState(loginStatus);
  const { LoginUser } = LoginApis();
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (inputId !== "" && inputPw !== "") {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [inputId, inputPw, setActive]);

  const checkValidation = async () => {
    const res = await LoginUser(inputId, inputPw);
    if (res.status === "SUCCESS") {
      alert("로그인 성공");
      setLogin(!login);
      handleModalClose();
    } else {
      alert(`아이디 혹은 비밀번호를 확인해주세요`);
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter" && active === false) {
      checkValidation();
    }
  };

  return (
    <>
      <div className={`${styles.signIn}`}>
        <div className={`${styles.boldText}`}>로그인</div>
        <div>
          <input
            className={styles.input}
            type="text"
            value={inputId || ""}
            onChange={setInputId}
            onKeyUp={enterPress}
            placeholder="아이디"
            autoFocus
          />
          <input
            className={styles.input}
            type="password"
            value={inputPw || ""}
            onChange={setInputPw}
            onKeyUp={enterPress}
            placeholder="비밀번호"
          />
        </div>
        <div className={`${styles.submit}`}>
          <MyButton
            disabled={active}
            onClickHandler={checkValidation}
            text="Sign In"
          />
        </div>
      </div>
    </>
  );
}

// 이 부분 컴포넌트로 바꿀만한 부분이 있을지?
// sign up도 마찬가지
// input이나 로직부분을 컴포넌트화 가능할지 고민해보자
// SignUp 과 기능차이는 많이 나지만 css등 기본골자는 비슷하다
// 어떻게든 합칠 방법은 없을지?
