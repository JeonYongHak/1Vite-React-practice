import { useState } from "react";
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useState("");
  const [input2, onChange] = useState("");

  return (
    <>
      <div>
        <input value={input} onChange={onChange} />
        <input value={input2} onChange={onChange} />
      </div>
    </>
  );
};
export default HookExam;
