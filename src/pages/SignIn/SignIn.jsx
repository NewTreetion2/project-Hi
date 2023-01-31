import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginStatus, dummyUser } from "store";
import { Button } from "react-bootstrap";

export default function SignIn() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const userInfo = [...useRecoilValue(dummyUser)];
  const [Login, setLogin] = useRecoilState(loginStatus);
  const inputText = (e) => {
    setInputId(e.target.value);
  };

  const inputPassword = (e) => {
    setInputPw(e.target.value);
  };

  const checkValidation = () => {
    if (inputId === "" || inputPw === "") {
      alert("공백이 존재할 수 없습니다");
    } else {
      const findId = userInfo.findIndex((id) => id.userId === inputId);
      if (findId < 0) {
        alert("아이디가 존재하지 않습니다");
      } else {
        if (userInfo[findId].userPw === inputPw) {
          alert("로그인 성공");
          setLogin(!Login);
          navigate("/");
        } else {
          alert("비밀번호가 틀립니다");
        }
      }
    }
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      checkValidation();
    }
  };

  return (
    <>
      <div className="signIn">
        <div className="loginText">로그인</div>
        <div>
          <p className="idInput">
            ID
            <input
              type="text"
              value={inputId}
              onChange={inputText}
              onKeyUp={enterPress}
              placeholder="아이디"
              autoFocus
            />
          </p>
          <p className="pwInput">
            PW
            <input
              type="password"
              value={inputPw}
              onChange={inputPassword}
              onKeyUp={enterPress}
              placeholder="비밀번호"
            />
          </p>
        </div>
      </div>
      <div className="submit">
        <Button variant="primary" onClick={checkValidation}>
          Sign In
        </Button>
      </div>
    </>
  );
}

// 이 부분 컴포넌트로 바꿀만한 부분이 있을지?
// sign up도 마찬가지
// input이나 로직부분을 컴포넌트화 가능할지 고민해보자
// SignUp 과 기능차이는 많이 나지만 css등 기본골자는 비슷하다
// 어떻게든 합칠 방법은 없을지?
