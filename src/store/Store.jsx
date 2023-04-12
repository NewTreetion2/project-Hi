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

export const signInUserId = atom({
  key: "signInUserId",
  default: "",
});
