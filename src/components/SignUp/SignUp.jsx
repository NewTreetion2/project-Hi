import { useMemo } from "react";

import { useInput, useModalControl } from "hooks";
import MyButton from "components/MyButton/MyButton";

import UserApis from "apis/UserApis";

import styles from "./SignUp.module.scss";

export default function SignUp() {
  const [inputId, setInputId] = useInput();
  const [inputPw, setInputPw] = useInput();
  const [inputPwConfirm, setInputPwConfirm] = useInput();
  const [inputName, setInputName] = useInput();
  const { handleModalClose } = useModalControl();
  const { RegistUser } = UserApis();

  const isActive = useMemo(() => {
    return (
      inputId.length &&
      inputPw.length &&
      inputPwConfirm.length &&
      inputName.length
    );
  }, [inputId, inputPw, inputPwConfirm, inputName]);

  const makeNewUser = async () => {
    const res = await RegistUser(inputId, inputPw, inputPwConfirm, inputName);
    if (res === 200) {
      alert(`회원가입 성공`);
      handleModalClose();
    } else {
      alert(`회원정보를 올바르게 입력해주세요`);
    }
  };

  const enterPress = (e) => {
    if (!isActive) return;

    if (e.key === "Enter") makeNewUser();
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
            disabled={!isActive}
            onClickHandler={makeNewUser}
            text="Submit"
          />
        </div>
      </div>
    </>
  );
}
