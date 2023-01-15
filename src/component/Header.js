import "css/Header.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginStatus } from "store/Store";

export default function Header() {
  // 현재 로그인상태인지 아닌지를 결정하는 State
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);
  // const logout = () => {
  //   if (isLogin) {
  //     if (!window.confirm("로그아웃 하시겠습니까?")) {
  //       alert("취소되었습니다");
  //     } else {
  //       alert("로그아웃되었습니다");
  //       setIsLogin(!isLogin);
  //     }
  //   } else {
  //     setIsLogin(!isLogin);
  //   }
  // };

  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-logo">
        {/* 헤더의 로고 이미지 (클릭 시 메인으로 이동) */}
        <Link to="/">
          <img src="img/logoimg.png" alt="로고이미지" />
        </Link>
      </div>
      {/* 임시로 제작한 로그인 버튼, 버튼을 누르면 로그인 페이지로 이동된다
      현재는 로그인 / 로그아웃 버튼이 누르기만 하면 변경되지만 이후 로그인 시 변경하도록 수정할 예정*/}
      <div className="header-login">
        <Link
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          to="login"
        >
          <button className="login-btn">
            {isLogin ? "로그아웃" : "로그인"}
          </button>
        </Link>
      </div>
    </div>
  );
}
