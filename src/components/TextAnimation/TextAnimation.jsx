import { useEffect, useState } from "react";
let tempText = [];

export default function TextAnimation({ text }) {
  const [temp, setTemp] = useState(false);
  const [count, setCount] = useState(0);
  const [renderText, setRenderText] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTemp(!temp);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (count >= text.length) {
      tempText = [];
      setRenderText([]);
      setCount(0);
    } else {
      tempText = [...renderText];
      tempText.push(text[count]);
      setRenderText(tempText);
      setCount(count + 1);
    }
  }, [temp, setTemp]);

  return <p>{renderText}</p>;
}
