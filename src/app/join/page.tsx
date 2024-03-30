"use client";

import { LoginBtn, SuccessBtn } from "@/styles/css-extracts/Btn.css";
import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import JoinInputForm from "./_component/JoinInputForm";
import { LoginRegContainer } from "@/styles/css-extracts/LoginReg.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import JoinNextPage from "./_component/JoinNextPage";
import { validateFormData } from "./validation";
import { constant } from "../utils/constant";
import useGlobalStore from "../hooks/useGlobalStore";
import { useModal } from "../hooks/useModal";
import ModalContainer from "../_component/ModalContainer";
import ModalPortal from "../_component/ModalPortal";
import JoinModal from "./_component/JoinModal";

export default function JoinPage() {
  const { openModal, handleOpenModal, handleCloseModal } = useModal();

  const router = useRouter();
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const [step, setStep] = useState<number>(stepParam ? Number(stepParam) : 1);
  const [oneSuccess, setOneSuccess] = useState<boolean>(false);
  const [twoSuccess, setTwoSuccess] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const [birthYear, setBirthYear] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const { setIsLogin, isLogin } = useGlobalStore();

  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);

  let headerTitle = "회원가입";
  let pageContent = (
    <JoinInputForm
      oneSuccess={oneSuccess}
      setOneSuccess={setOneSuccess}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      nickname={nickname}
      setNickname={setNickname}
    />
  );
  let BtnContent = "다음";

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
    pageContent = (
      <JoinNextPage
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        birthYear={birthYear}
        setBirthYear={setBirthYear}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    );
    BtnContent = "회원가입";
  }

  useEffect(() => {
    setTwoSuccess(validateFormData(birthYear, selectedCategory, selectedGender));
  }, [birthYear, selectedCategory, selectedGender]);

  const handleNext = () => {
    if (step < 2) {
      const nextStep = step + 1;
      setStep(nextStep);
      router.push(`/join/?step=${nextStep}`);
    } else if (step === 2) {
      handleReg();
    }
  };

  const handleReg = async () => {
    try {
      const res = await fetch(constant.apiUrl + "users/sign-up", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          nickname,
          gender: selectedGender,
          birthYear,
          occupation: selectedCategory,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setIsLogin(true);
          handleOpenModal();
        }
      } else {
        const errorData = await res.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("error");
    }
  };

  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={headerTitle} isRegPage={true} loginProcess={step} />
      {pageContent}
      {step < 3 && (
        <button
          className={`${LoginBtn} ${step === 1 ? (oneSuccess ? SuccessBtn : "") : step === 2 ? (twoSuccess ? SuccessBtn : "") : ""}`}
          onClick={handleNext}
          disabled={(step === 1 && !oneSuccess) || (step === 2 && !twoSuccess)}
        >
          {BtnContent}
        </button>
      )}
      {openModal && (
        <ModalPortal>
          <ModalContainer>
            <JoinModal handleCloseModal={handleCloseModal} />
          </ModalContainer>
        </ModalPortal>
      )}
    </div>
  );
}
