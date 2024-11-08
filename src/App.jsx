import "./App.css";
import { useState } from "react";

const Bulb = () => {

  return (
    <>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "on" ? "off" : "on");
        }}
      >
        전구 켜기 or 끄기
      </button>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
