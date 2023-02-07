import { useState } from "react";

export default function useInput(e) {
  const [info, setInfo] = useState();

  const onChange = (e) => {
    setInfo(e.target.value);
  };
  return [info, onChange];
}
