import { useState } from "react";
import "./SignUp.css";
import { useRecoilState } from "recoil";
import { dummyUser } from "store";
import { Button } from "react-bootstrap";
import useModalControl from "hooks/useModalControl";

export default function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const { handleModalClose } = useModalControl();
  const [user, setUser] = useRecoilState(dummyUser);
  const inputUserId = (e) => {
    setUserId(e.target.value);
  };
  const inputUserPw = (e) => {
    setUserPw(e.target.value);
  };

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
      <div className="signUp">
        <div className="signUpText">회원가입</div>
        <form>
          <p className="idInput">
            ID
            <input
              type="text"
              value={userId}
              onChange={inputUserId}
              onKeyUp={enterPress}
              placeholder="아이디"
              autoFocus
            />
          </p>
          <p className="pwInput">
            PW
            <input
              type="password"
              value={userPw}
              onChange={inputUserPw}
              onKeyUp={enterPress}
              placeholder="비밀번호"
            />
          </p>
        </form>
      </div>
      <div className="submit">
        <Button variant="primary" onClick={makeNewUser}>
          Submit
        </Button>
      </div>
    </>
  );
}
