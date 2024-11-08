import { useRef, useState } from "react";

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();
  console.log("Register 렌더링");

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <button>ref + 1</button>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
          type="text"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth} // 수정된 부분
          onChange={onChange}
          type="date"
        />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          {/* 아무것도 설정되지 않은 목록을 추가하고 싶으면 빈 option 태그를 설정함 */}
          <option value="default"></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea
          name="bio"
          placeholder="자기소개를 해주세요."
          value={input.bio}
          onChange={onChange}
        ></textarea>
        {input.bio}
        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
};

export default Register;
