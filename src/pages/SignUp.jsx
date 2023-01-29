import { useState } from "react";
import "css/SignUp.css";
import { useRecoilState } from "recoil";
import { dummyUser } from "store";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [user, setUser] = useRecoilState(dummyUser);
  const navigate = useNavigate();
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
      newUser.push({
        id: newUser.length + 1,
        userId: tempId,
        userPw: tempPw,
      });
      setUser(newUser);
      alert("회원가입이 완료되었습니다");
      navigate("/SignIn");
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      makeNewUser();
    }
  };

  return (
    <div className="signUpOutline">
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
            />
          </p>
          <p className="pwInput">
            PW
            <input
              type="password"
              value={userPw}
              onChange={inputUserPw}
              onKeyUp={enterPress}
            />
          </p>
        </form>
        <Button
          className="login_btn_style"
          onClickHandler={makeNewUser}
          title={"확인"}
        />
      </div>
    </div>
  );
}
