import { useState } from "react";
import "css/SignUp.css";

export default function SignIn({ loginState }) {
  const [inputUserId, setInputUserId] = useState("");
  const inputText = (e) => {
    setInputUserId(e.target.value);
  };
  if (loginState === "sign up") {
    return (
      <div className="signUp">
        <div className="signUpText">회원가입</div>
        <form>
          ID : <input type="text" value={inputUserId} onChange={inputText} />
        </form>
      </div>
    );
  }
}
