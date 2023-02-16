import { useEffect, useState } from "react";

export default function useInput() {
  const [info, setInfo] = useState();

  useEffect(() => {
    setInfo(``);
  }, []);

  const onChange = (e) => {
    setInfo(e.target.value);
  };
  return [info, onChange];
}
