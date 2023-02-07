import styles from "./SignUp.module.scss";

import { useRecoilState } from "recoil";
import { Button } from "react-bootstrap";

import { dummyUser } from "store";

import { useInput, useModalControl } from "hooks";

export default function SignUp() {
  const [userId, setUserId] = useInput();
  const [userPw, setUserPw] = useInput();
  const { handleModalClose } = useModalControl();
  const [user, setUser] = useRecoilState(dummyUser);

  const makeNewUser = () => {
    if (userId === "" || userPw === "") {
      alert("공백이 존재할 수 없습니다");
    } else {
      const newUser = [...user];
      const tempId = userId;
      const tempPw = userPw;
      if (newUser.find((user) => user.userId === tempId)) {
        alert("중복된 아이디가 존재합니다");
      } else {
        newUser.push({
          id: newUser.length + 1,
          userId: tempId,
          userPw: tempPw,
        });
        setUser(newUser);
        alert("회원가입이 완료되었습니다");
        handleModalClose();
      }
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      makeNewUser();
    }
  };

  return (
    <>
      <div className={`${styles.signUp}`}>
        <div className={`${styles.boldText}`}>회원가입</div>
        <form>
          <p className={`${styles.idInput}`}>
            ID
            <input
              type="text"
              value={userId}
              onChange={setUserId}
              onKeyUp={enterPress}
              placeholder="아이디"
              autoFocus
            />
          </p>
          <p className={`${styles.pwInput}`}>
            PW
            <input
              type="password"
              value={userPw}
              onChange={setUserPw}
              onKeyUp={enterPress}
              placeholder="비밀번호"
            />
          </p>
        </form>
      </div>
      <div className={`${styles.submit}`}>
        <Button variant="primary" onClick={makeNewUser}>
          Submit
        </Button>
      </div>
    </>
  );
}
