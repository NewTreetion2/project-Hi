import { useState } from "react";

export default function TextAnimation({ text }) {
  const [count, setCount] = useState(0);
  const [renderText, setRenderText] = useState([]);
  let tempText = [];

  setInterval(() => {
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

    console.log(renderText);
  }, 10000000);
  return <h1>{renderText}</h1>;
}
