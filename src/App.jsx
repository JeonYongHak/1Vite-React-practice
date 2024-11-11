import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  useEffect(() => {
    console.log(`input : ${input}`);
  }, [count, input]);
  // 이때 새로고침을 누르게 되면, 콘솔의 입력 창이 초기화 됩니다.
  // 의존성 배열(deps) : deps에는 값을 여러 개 설정하여도 상관 없음
  // 콘솔에 아무리 많은 값을 입력한다고 해도 콘솔에는 아무런 메시지도 나오지 않음
  // 의존성 배열에 count값이 설정되어 있기에 count값이 변경이 되지 않아 useEffect가 실행되지 않는 것!
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
        <section className="flex items-center justify-center">
          <input
            className="flex px-4 py-2 mb-4 font-bold text-center border rounded-lg shadow-md border-slate-400 "
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </section>
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
