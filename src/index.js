import React from "react";
import ReactDOM from "react-dom";
import { useState, useRef, useMemo, useCallback } from "react";

import "./styles.css";

const Header = React.memo(function Header(props) {
  console.count("Header.render");

  return <h1>My Counter Demo</h1>;
});

const DisplayValue = React.memo(function DisplayValue(props) {
  console.count("DisplayValue.render");
  const { val } = props;
  return <p>Value: {val}</p>;
});

const DisplayMod5 = React.memo(
  function DisplayMod5(props) {
    console.count("DisplayMod5.render");

    const { val } = props;
    const text =
      val % 5 === 0 ? "Value is divisible by 5" : "Value does not divide by 5";

    return <p>{text}</p>;
  },
  function (prevProps, nextProps) {
    return Boolean(prevProps.val % 5) === Boolean(nextProps.val % 5);
  }
);

const MyButton = React.memo(function MyButton(props) {
  console.count("MyButton.render");
  return <button onClick={props.onClick}>Click Me</button>;
});

function Counter() {
  console.count("Counter.render");

  const [delta, setDelta] = useState(1);
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function inc() {
      setCount((x) => x + delta);
    },
    [delta]
  );

  return (
    <>
      <Header />
      <label>
        Increase by:
        <input
          type="number"
          value={delta}
          onChange={(e) => setDelta(Number(e.target.value))}
        />
      </label>
      <DisplayValue val={count} />
      <DisplayMod5 val={count} />
      <MyButton onClick={inc} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
