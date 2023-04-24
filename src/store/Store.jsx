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

// 현재 로그인 한 유저 정보
export const signInUser = atom({
  key: "signInUser",
  default: {},
});

// 프로젝트 목록 가져오기
export const workStatus = atom({
  key: "workStatus",
  default: [],
});

export const mypageSortType = atom({
  key: "mypageSortType",
  default: "all",
});

export const mypageSearchStatus = atom({
  key: "mypageSearchStatus",
  default: [],
});
