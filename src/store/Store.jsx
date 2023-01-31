import { atom } from "recoil";

// 테스트를 위해 임시로 제작한 loginState
export const loginStatus = atom({
  key: "loginStatus",
  default: false,
});

// Modal창 컨트롤러
export const modalStatus = atom({
  key: "modalStatus",
  default: false,
});

// 유저 더미데이터
export const dummyUser = atom({
  key: "dummyUser",
  default: [
    {
      id: 1,
      userId: "phy8023",
      userPw: "gusdnd2",
    },
    {
      id: 2,
      userId: "gusdnd8023",
      userPw: "gusdnd12",
    },
    {
      id: 3,
      userId: "phw8023",
      userPw: "3498023",
    },
  ],
});
