"use client";

import { LoginBtn } from "@/styles/css-extracts/Btn.css";
import JoinGender from "./_component/JoinGender";
import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import { LoginRegContainer, SubTitle, BirthContainer } from "@/styles/css-extracts/LoginReg.css";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import JoinBirth from "./_component/JoinBirth";

export default function Join() {
  const [birthYear, setBirthYear] = useState<string>("");
  const router = useRouter();

  const nextBtn = () => {
    router.push("/joininfo");
  };

  const handleBirthYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d{0,4}$/.test(input)) {
      setBirthYear(input);
    }
  };

  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={"회원정보를 입력해주세요."} isRegPage={true} loginProcess={2} />
      <button className={LoginBtn}>회원가입</button>
      <div className={SubTitle}>정확한 투표 결과를 위해 활용됩니다.</div>
      <JoinGender />
      <JoinBirth birthYear={birthYear} handleBirthYearChange={handleBirthYearChange} />
    </div>
  );
}
