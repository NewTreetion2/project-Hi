import "css/Login.css";
import { useState } from "react";
import SignIn from "component/SignIn";
import SignUp from "component/SignUp";

//로그인 버튼 시 회원가입, 로그인창을 띄워준다
export default function Login() {
  const [signState, setSignState] = useState("sign in");
  // const [userId, setUserId] = useState("");
  const changeSignState = (e) => {
    setSignState(e.target.value);
  };
  return (
    <div className="login">
      <div className="loginRadioBox">
        <label>
          <input
            onChange={changeSignState}
            type="radio"
            value="sign in"
            name="sign"
            checked={signState === "sign in"}
          ></input>
          로그인
        </label>
        <label>
          <input
            onChange={changeSignState}
            type="radio"
            value="sign up"
            name="sign"
            checked={signState === "sign up"}
          ></input>
          회원가입
        </label>
      </div>
      <SignIn loginState={signState} />
      <SignUp loginState={signState} />
    </div>
  );
}
