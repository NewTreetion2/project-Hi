import styles from "./Header.module.scss";

import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import MyButton from "components/Button/MyButton";

import { loginStatus } from "store";

import useModalControl from "hooks/useModalControl";

export default function Header() {
  // 현재 로그인상태인지 아닌지를 결정하는 State
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);
  const navigate = useNavigate();
  const goGetWork = () => {
    navigate("/getWork");
  };
  const goMyPage = () => {
    navigate("/my-page");
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

  const {
    defineModalTypeAsSignin,
    defineModalTypeAsSignUp,
    defineModalTypeAsThrowWork,
  } = useModalControl();

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.logo}`}>
        {/* 헤더의 로고 이미지 (클릭 시 메인으로 이동) */}
        <Link to="/">
          <img
            className={`${styles.logoSize}`}
            src="img/logoimg2.png"
            alt="로고이미지"
          />
        </Link>
      </div>
      <div className={`${styles.login}`}>
        <div className={`${styles.loginBtn}`}>
          {isLogin ? (
            <div className={`${styles.btnSpace}`}>
              <MyButton onClickHandler={goMyPage} text={"My Page"} />
              <MyButton
                onClickHandler={defineModalTypeAsThrowWork}
                text={"일 던져주기"}
              />
              <MyButton onClickHandler={goGetWork} text={"일 받기"} />
              <MyButton onClickHandler={logout} text={"Logout"} />
            </div>
          ) : (
            <div className={`${styles.btnSpace}`}>
              <MyButton
                onClickHandler={defineModalTypeAsSignin}
                text={"Sign In"}
              />
              <MyButton
                onClickHandler={defineModalTypeAsSignUp}
                text={"Sign Up"}
              />
            </div>
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
