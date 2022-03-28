import { useEffect, useState } from "react";
import "./styles.sass";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [newUrl, setNewUrl] = useState([]);
  // const [rangeValue, setRangeValue] = useState("");

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   window.history.pushState({}, "", `/#${textValue}`);
  //   // }, 1500);
  //   setNewUrl(textValue.split("\r\n"));
  //   newUrl.map((url, index) =>
  //     window.history.pushState({}, "", `/#${url[index]}`)
  //   );
  // }, [textValue]);

  const handleStart = () => {};

  return (
    <div className="container">
      <textarea
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      {textValue}
      {/* <input
        type="range"
        min="1"
        max="100"
        value={rangeValue}
        onChange={(event) => setRangeValue(event.target.value)}
        className="slider"
        id="myRange"
      /> */}
      <a className="buttonText" href="#" onClick="handleStart">
        Animate my url
      </a>
    </div>
  );
}
