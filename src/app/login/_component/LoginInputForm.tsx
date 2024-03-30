"use client";

import {
  LoginRegInput,
  LoginRegLabel,
  PasswordInputContainer,
  ShowPasswordImg,
  LoginButton,
  ErrorMessage,
} from "@/styles/css-extracts/LoginInput.css";
import CloseEye from "../../../../public/closeeye.svg";
import Eye from "../../../../public/eye.svg";
import Image from "next/image";

import { useState } from "react";
import useGlobalStore from "@/app/hooks/useGlobalStore";
import { useRouter } from "next/navigation";

import { constant } from "@/app/utils/constant";

export default function LoginInpuForm() {
  const { setIsLogin } = useGlobalStore();

  const [isError, setIsError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch(constant.apiUrl + "users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        if (data.success) {
          setIsLogin(true);
          setIsError(false);
          router.push("/");
        } else {
          setIsLogin(false);
          setIsError(true);
        }
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="email" className={LoginRegLabel}>
          이메일
        </label>
        <input type="text" className={LoginRegInput} value={email} onChange={(e) => setEmail(e.target.value)} />
        {isError && <div className={ErrorMessage}>이메일 또는 비밀번호가 일치하지 않습니다.</div>}
      </div>
      <div>
        <label htmlFor="password" className={LoginRegLabel}>
          비밀번호
        </label>
        <div className={PasswordInputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            className={LoginRegInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <Image
              src={Eye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Image
              src={CloseEye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>
      {isError && <div className={ErrorMessage}>이메일 또는 비밀번호가 일치하지 않습니다.</div>}
      <button className={LoginButton} onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}
