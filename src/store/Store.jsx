import { atom } from "recoil";

// 로그인 관리를 위한 LoginState
export const loginStatus = atom({
  key: "loginStatus",
  default: false,
});

// Modal창 컨트롤러
export const modalStatus = atom({
  key: "modalStatus",
  default: "",
});

// MyPage의 Worklist Search기능을 사용하기 위한 State
export const projectSearchStatus = atom({
  key: "projectSearchStatus",
  default: "",
});
