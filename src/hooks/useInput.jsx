import { useState, useCallback } from "react";

export default function useInput() {
  const [info, setInfo] = useState("");

  const onChange = useCallback((e) => {
    setInfo(e.target.value);
  }, []);

  return [info, onChange];
}
