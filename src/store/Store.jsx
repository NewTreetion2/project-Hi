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

// 일 던져주기, 받기를 위한 dummyData
export const dummyData = atom({
  key: "dummyData",
  default: [],
});
