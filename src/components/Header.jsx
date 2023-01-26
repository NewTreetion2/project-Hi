import "css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginStatus } from "store/Store";
import Button from "./Button";

export default function Header() {
  // 현재 로그인상태인지 아닌지를 결정하는 State
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);
  const navigate = useNavigate();
  const goSignIn = () => {
    navigate("/SignIn");
  };

  const goSignUp = () => {
    navigate("/SignUp");
  };

  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다");
      setIsLogin(!isLogin);
      navigate("/");
    } else {
      alert("취소되었습니다");
    }
  };

  return (
    <div className="header">
      <div className="header_img">로고 추가 예정</div>
      <div className="header_logo">
        {/* 헤더의 로고 이미지 (클릭 시 메인으로 이동) */}
        <Link to="/">
          <img src="img/logoimg.png" alt="로고이미지" />
        </Link>
      </div>
      <div className="header_login">
        <div className="login_btn">
          {isLogin ? (
            <>
              <Button
                className="login_btn_style"
                onClickHandler={() => {}}
                title="My Page"
              />
              <Button
                className="login_btn_style"
                onClickHandler={() => {}}
                title="일 던져주기"
              />
              <Button
                className="login_btn_style"
                onClickHandler={() => {}}
                title="일 받기"
              />
              <Button
                className="login_btn_style"
                onClickHandler={logout}
                title="Logout"
              />
            </>
          ) : (
            <>
              <Button
                className="login_btn_style"
                onClickHandler={goSignIn}
                title="Sign in"
              />
              <Button
                className="login_btn_style"
                onClickHandler={goSignUp}
                title="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
  // 로그인 비로그인 삼항연산자로 처리 ( 솔루션 )
  // 비로그인 시 로그인과 회원가입 두 개의 버튼을 띄워 각각 화면으로 보여주게 하기 ("라우팅을 이용해 sign in, sign up 이동")

  // 질문2. 여러개의 버튼을 map으로 만들 때 onClickHandler가 각각 다르다면 if로 처리해야하는지? 그럼 더 복잡하지 않을까?
  // 이건 방식의 차이?

  // return (
  //   <div className="header">
  //     <div className="header-img">로고 추가 예정</div>
  //     <div className="header-logo">
  //       {/* 헤더의 로고 이미지 (클릭 시 메인으로 이동) */}
  //       <Link to="/">
  //         <img src="img/logoimg.png" alt="로고이미지" />
  //       </Link>
  //     </div>
  //     {/* 임시로 제작한 로그인 버튼, 버튼을 누르면 로그인 페이지로 이동된다
  //     현재는 로그인 / 로그아웃 버튼이 누르기만 하면 변경되지만 이후 로그인 시 변경하도록 수정할 예정*/}
  //     <div className="header-login">
  //       <Link
  //         onClick={() => {
  //           setIsLogin(!isLogin);
  //         }}
  //         to="login"
  //       >
  //         <button className="login-btn">
  //           {isLogin ? "로그아웃" : "로그인"}
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // );
}
