import { useState } from "react";
import "css/SignUp.css";
import { useRecoilState } from "recoil";
import { dummyUser } from "store";
import Button from "./Button";

export default function SignIn({ loginState }) {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [user, setUser] = useRecoilState(dummyUser);
  const inputUserId = (e) => {
    setUserId(e.target.value);
  };
  const inputUserPw = (e) => {
    setUserPw(e.target.value);
  };

  const makeNewUser = () => {
    const newUser = [...user];
    const tempId = userId;
    const tempPw = userPw;
    newUser.push({
      id: newUser.length + 1,
      userId: tempId,
      userPw: tempPw,
    });
    setUser(newUser);
    console.log(user);
  };

  if (loginState === "sign up") {
    return (
      <div className="signUp">
        <div className="signUpText">회원가입</div>
        <form>
          <p>
            ID : <input type="text" value={userId} onChange={inputUserId} />
          </p>
          <p>
            PW : <input type="password" value={userPw} onChange={inputUserPw} />
          </p>
        </form>
        <Button onClickHandler={makeNewUser} title={"확인"} />
      </div>
    );
  }
}
