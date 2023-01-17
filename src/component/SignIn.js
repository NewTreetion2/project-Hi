import "css/SignIn.css";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { dummyUser } from "store";
import Button from "./Button";

export default function SignIn({ loginState }) {
  const [inputUserInfo, setInputUserInfo] = useState("");
  const userInfo = [...useRecoilValue(dummyUser)];
  const inputText = (e) => {
    setInputUserInfo(e.target.value);
  };
  const checkId = () => {
    const userNumber = userInfo.findIndex((e) => e.userId === inputUserInfo);
    if (userNumber === -1) {
      return alert("아이디가 존재하지 않음");
    } else {
      return alert(`아이디는 ${userNumber}에 존재`);
    }
  };

  if (loginState === "sign in") {
    return (
      <div className="signIn">
        <div className="loginText">로그인</div>
        <form>
          ID : <input type="text" value={inputUserInfo} onChange={inputText} />
        </form>
        <Button onClickHandler={checkId} title={"확인"} />
      </div>
    );
  }
}
