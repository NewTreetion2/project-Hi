import "css/SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginStatus } from "store";
import { dummyUser } from "store";
import Button from "../components/Button";

export default function SignIn() {
  const navigate = useNavigate();
  const [saveId, setSaveId] = useState(0);
  const [inputUserInfo, setInputUserInfo] = useState("");
  const [idExists, setIdExists] = useState(false);
  const userInfo = [...useRecoilValue(dummyUser)];
  const [Login, setLogin] = useRecoilState(loginStatus);
  const inputText = (e) => {
    setInputUserInfo(e.target.value);
  };

  const checkId = () => {
    const userNumber = userInfo.findIndex((e) => e.userId === inputUserInfo);
    if (userNumber === -1) {
      return alert("아이디가 존재하지 않음");
    } else {
      setSaveId(userNumber);
      setIdExists(!idExists);
      setInputUserInfo("");
    }
  };

  const checkPw = () => {
    if (inputUserInfo === userInfo[saveId].userPw) {
      setLogin(!Login);
      alert("로그인이 완료되었습니다");
      navigate("/");
    } else {
      alert("패스워드를 확인해주세요");
      setInputUserInfo("");
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.type === "text") {
        checkId();
      } else {
        checkPw();
      }
    }
  };

  return (
    <div className="loginOutline">
      <div className="signIn">
        <div className="loginText">로그인</div>
        {idExists ? (
          <p className="pwInput">
            PW{" "}
            <input
              type="password"
              value={inputUserInfo}
              onChange={inputText}
              onKeyUp={enterPress}
            />
          </p>
        ) : (
          <p className="idInput">
            ID{" "}
            <input
              type="text"
              value={inputUserInfo}
              onChange={inputText}
              onKeyUp={enterPress}
            />
          </p>
        )}
        <Button
          className="login_btn_style"
          onClickHandler={checkId}
          title={"확인"}
        />
      </div>
    </div>
  );
}
