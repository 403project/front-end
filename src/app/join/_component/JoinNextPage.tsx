"use client";

import { LoginBtn } from "@/styles/css-extracts/Btn.css";

import { SubTitle } from "@/styles/css-extracts/LoginReg.css";
import { useState, ChangeEvent } from "react";
import JoinField from "./JoinField";
import JoinBirth from "./JoinBirth";
import JoinGender from "./JoinGender";

export default function JoinNextPage() {
  const [birthYear, setBirthYear] = useState<string>("");
  const [selectedCategory, setSelecteCategory] = useState<string | null>("");

  const handleCategorySelect = (selectedCategory: string) => {
    setSelecteCategory(selectedCategory);
  };

  const handleBirthYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d{0,4}$/.test(input)) {
      setBirthYear(input);
    }
  };

  return (
    <>
      <button className={LoginBtn}>회원가입</button>
      <div className={SubTitle}>정확한 투표 결과를 위해 활용됩니다.</div>
      <JoinGender />
      <JoinBirth birthYear={birthYear} handleBirthYearChange={handleBirthYearChange} />
      <JoinField selectedOption={selectedCategory} OnSelectedOption={handleCategorySelect} />
    </>
  );
}
