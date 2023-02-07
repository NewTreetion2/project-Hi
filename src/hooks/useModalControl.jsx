import { useRecoilState } from "recoil";
import { useCallback } from "react";

import { modalStatus } from "store";

export default function useModalControl() {
  const [modalType, setModalType] = useRecoilState(modalStatus);

  //? 모달 타입을 만들어서 사용(타입별로 다른 모달 컨텐츠를 보여줌), 이렇게말고 셀렉터로 짜도 좋을듯
  const handleModalOpenOnType = useCallback(
    (modalType) => {
      setModalType(modalType); //? 모달 타입을 정의
    },
    [setModalType]
  );

  const defineModalTypeAsSignin = () => {
    handleModalOpenOnType("signIn");
  };

  const defineModalTypeAsSignUp = () => {
    handleModalOpenOnType("signUp");
  };

  const defineModalTypeAsThrowWork = () => {
    handleModalOpenOnType("throwWork");
  };

  const handleModalClose = useCallback(() => {
    setModalType("");
  }, [setModalType]);

  return {
    modalType,
    defineModalTypeAsSignin,
    defineModalTypeAsSignUp,
    defineModalTypeAsThrowWork,
    handleModalClose,
  };
}
