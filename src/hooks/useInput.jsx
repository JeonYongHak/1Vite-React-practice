import { useState } from "react";

const useInput = () => {
  const [input, onChange] = useInput();
  const [input2, setInput2] = useInput();

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return <div>useInput</div>;
};
export default useInput;
