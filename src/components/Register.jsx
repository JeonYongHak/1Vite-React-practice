import { useState } from "react";

// 간단한 회원가입 폼
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

  const onChangeName = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <>
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
          type="text"
        />
      </div>
      <div>
        <input value={} onChange={onChangeBirth} type="date" />
        {input.birth}
      </div>
      <div>
        <select value={input.country} onChange={onChangeCountry}>
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
          placeholder="자기소개를 해주세요."
          value={input.bio}
          onChange={onChangeBio}
        ></textarea>{" "}
        {input.bio}
      </div>
    </>
  );
};
export default Register;
