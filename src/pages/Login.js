import "css/Login.css";

//로그인 버튼 시 회원가입, 로그인창을 띄워준다
export default function Login() {
  return (
    <div className="login">
      <form>
        <p>
          ID <input type="text" value="" />
        </p>
        <p>
          PW <input type="password" value="" />
        </p>
        <submit type="button">로그인</submit>
      </form>
    </div>
  );
}
