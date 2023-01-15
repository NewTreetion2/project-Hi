import { atom } from "recoil";

// 테스트를 위해 임시로 제작한 loginState
export const loginStatus = atom({
  key: "loginStatus",
  default: false,
});
