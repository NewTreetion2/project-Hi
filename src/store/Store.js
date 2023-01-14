import { atom } from "recoil";

// 테스트를 위해 임시로 제작한 loginState
const loginTemp = atom({
  key: "loginTemp",
  default: false,
});

export { loginTemp };
