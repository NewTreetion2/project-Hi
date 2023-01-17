import "css/SignIn.css";
import { useState } from "react";

export default function SignIn({ loginState }) {
  const [inputUserId, setInputUserId] = useState("");
  const inputText = (e) => {
    setInputUserId(e.target.value);
  };

  if (loginState === "sign in") {
    return (
      <div className="signIn">
        <div className="loginText">로그인</div>
        <form>
          ID : <input type="text" value={inputUserId} onChange={inputText} />
        </form>
      </div>
    );
  }
}
