import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder={"이름"}
          type="text"
        />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
        {birth}
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          {/* 아무것도 설정되지 않은 목록을 추가하고 싶으면 빈 option 태그를 설정함 */}
          <option value="default"></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>
      <div>
        <textarea
          placeholder="자기소개를 해주세요."
          value={bio}
          onChange={onChangeBio}
        ></textarea>{" "}
        {bio}
      </div>
    </>
  );
};
export default Register;
