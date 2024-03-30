"use client";

import { LoginBtn } from "@/styles/css-extracts/Btn.css";

import { SubTitle } from "@/styles/css-extracts/LoginReg.css";
import { ChangeEvent } from "react";
import JoinField from "./JoinField";
import JoinBirth from "./JoinBirth";
import JoinGender from "./JoinGender";

interface IJoinNextPageProps {
  selectedGender: string | null;
  setSelectedGender: React.Dispatch<React.SetStateAction<string | null>>;
  birthYear: string;
  setBirthYear: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function JoinNextPage({
  selectedGender,
  setSelectedGender,
  birthYear,
  setBirthYear,
  selectedCategory,
  setSelectedCategory,
}: IJoinNextPageProps) {
  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
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
      <JoinGender selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
      <JoinBirth birthYear={birthYear} handleBirthYearChange={handleBirthYearChange} />
      <JoinField selectedOption={selectedCategory} OnSelectedOption={handleCategorySelect} />
    </>
  );
}
