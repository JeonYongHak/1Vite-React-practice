import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  // 이때 새로고침을 누르게 되면, 콘솔의 입력 창이 초기화 됩니다.
 // 의존성 배열 : 
  const onClickButton = (value) => {
    setCount(count + value);
    if (value === 0) {
      setCount(0);
    }
  };
  return (
    <>
      <div className="m-20">
        <h1 className="py-5 text-4xl font-bold text-center">Simple Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
