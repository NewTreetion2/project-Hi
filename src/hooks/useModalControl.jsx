import { useRecoilState } from "recoil";
import { useCallback } from "react";

import { modalStatus } from "store";

export default function useModalControl() {
  const [isModalView, setIsModalView] = useRecoilState(modalStatus);

  const handleModalOpen = useCallback(() => {
    setIsModalView(true);
  }, [setIsModalView]);

  const handleModalClose = useCallback(() => {
    setIsModalView(false);
  }, [setIsModalView]);

  return {
    isModalView,
    handleModalOpen,
    handleModalClose,
  };
}
