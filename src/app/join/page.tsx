"use client";

import { LoginBtn } from "@/styles/css-extracts/Btn.css";
import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import JoinInputForm from "./_component/JoinInputForm";
import { LoginRegContainer } from "@/styles/css-extracts/LoginReg.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import JoinNextPage from "./_component/JoinNextPage";

export default function JoinPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const [step, setStep] = useState<number>(stepParam ? Number(stepParam) : 1);
  let headerTitle = "회원가입";
  let pageContent = <JoinInputForm />;

  useEffect(() => {
    if (stepParam) {
      setStep(Number(stepParam));
    }
  }, [stepParam]);

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  if (step === 2) {
    headerTitle = "회원정보를 입력해주세요.";
    pageContent = <JoinNextPage />;
  }

  const handleNext = () => {
    if (step < 2) {
      const nextStep = step + 1;
      setStep(nextStep);
      router.push(`/join/?step=${nextStep}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={headerTitle} isRegPage={true} loginProcess={step} />
      {pageContent}
      {step < 3 && (
        <button className={LoginBtn} onClick={handleNext}>
          다음
        </button>
      )}
    </div>
  );
}
