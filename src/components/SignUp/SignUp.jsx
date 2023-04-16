import styles from "./SignUp.module.scss";

import UserApis from "apis/UserApis";

import { useInput, useModalControl } from "hooks";
import { useState, useEffect } from "react";
import MyButton from "components/Button/MyButton";

export default function SignUp() {
  const [active, setActive] = useState(true);
  const [inputId, setInputId] = useInput();
  const [inputPw, setInputPw] = useInput();
  const [inputPwConfirm, setInputPwConfirm] = useInput();
  const [inputName, setInputName] = useInput();
  const { handleModalClose } = useModalControl();
  const { RegistUser } = UserApis();

  useEffect(() => {
    if (
      inputId !== "" &&
      inputPw !== "" &&
      inputPwConfirm !== "" &&
      inputName !== ""
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [inputId, inputPw, inputPwConfirm, inputName, setActive]);

  const makeNewUser = async () => {
    if (inputId === "" || inputPw === "") {
      alert("공백이 존재할 수 없습니다");
    } else {
      const res = await RegistUser(inputId, inputPw, inputPwConfirm, inputName);
      if (res === 200) {
        alert(`회원가입 성공`);
        handleModalClose();
      } else {
        alert(`회원정보를 올바르게 입력해주세요`);
      }
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter" && active === false) {
      makeNewUser();
    }
  };

  return (
    <>
      <div className={`${styles.signUp}`}>
        <div className={`${styles.boldText}`}>회원가입</div>
        <form>
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
          <input
            className={styles.input}
            type="password"
            value={inputPwConfirm || ""}
            onChange={setInputPwConfirm}
            onKeyUp={enterPress}
            placeholder="비밀번호를 다시 한 번 입력해주세요."
          />
          <input
            className={styles.input}
            type="text"
            value={inputName || ""}
            onChange={setInputName}
            onKeyUp={enterPress}
            placeholder="닉네임을 입력해주세요."
          />
        </form>
        <div className={`${styles.submit}`}>
          <MyButton
            disabled={active}
            onClickHandler={makeNewUser}
            text="Submit"
          />
        </div>
      </div>
    </>
  );
}
