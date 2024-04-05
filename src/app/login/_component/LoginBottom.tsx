"use client";

import {
  SignupContainer,
  SignupAsk,
  GotoReg,
  SeperatorContainer,
  LeftSeperatorLine,
  RightSeperatorLine,
  SocialImageContainer,
} from "@/styles/css-extracts/LoginReg.css";

import Image from "next/image";
import Kakao from "../../../../public/kakao.svg";
import Google from "../../../../public/google.svg";
import { useRouter } from "next/navigation";

const LoginBottom = () => {
  const router = useRouter();

  const handleReg = () => {
    router.push("/join");
  };

  return (
    <div>
      <div className={SignupContainer}>
        <span className={SignupAsk}>계정이 없으신가요?</span>
        <span className={GotoReg} onClick={handleReg}>
          회원가입 하기
        </span>
      </div>
      <div className={SeperatorContainer}>
        <span className={LeftSeperatorLine}></span>
        <span>OR</span>
        <span className={RightSeperatorLine}></span>
      </div>
      <div className={SocialImageContainer}>
        <Image src={Kakao} width={48} height={48} alt="카카오 이미지" />
        <Image src={Google} width={48} height={48} alt="구글 이미지" />
      </div>
    </div>
  );
};

export default LoginBottom;
