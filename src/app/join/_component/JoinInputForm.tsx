"use client";

import {
  LoginRegInput,
  LoginRegLabel,
  PasswordInputContainer,
  ShowPasswordImg,
  RegEmailNickInput,
  Duplicate,
  ErrorMessage,
  Error,
} from "@/styles/css-extracts/LoginInput.css";
import CloseEye from "../../../../public/closeeye.svg";
import Eye from "../../../../public/eye.svg";
import Check from "../../../../public/check.svg";
import Image from "next/image";

import { useState, FocusEvent, KeyboardEvent } from "react";

export default function JoinInputForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rePasswordError, setRePasswordError] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");

  const [onEmailError, setOnEmailError] = useState<boolean>(false);
  const [onPasswordError, setOnPasswordError] = useState<boolean>(false);
  const [onNickError, setonNickError] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: FocusEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.trim();
    if (!validateEmail(newEmail)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
      setOnEmailError(true);
    } else {
      setEmailError("");
      setOnEmailError(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const handleBlurPassword = (e: FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if ((value !== "" && value.length < 6) || value.length > 10) {
      setPasswordError("비밀번호는 6자 이상 10자 이하여야 합니다.");
      setOnPasswordError(true);
    } else {
      setPasswordError("");
      setOnPasswordError(false);
    }
  };

  const handleBlurRePassword = () => {
    if (password !== "" && rePassword !== "" && password !== rePassword) {
      setRePasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setOnPasswordError(true);
    } else {
      setRePasswordError("");
      setOnPasswordError(false);
    }
  };

  const handleBlurNick = (e: FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if ((value !== "" && value.length < 2) || value.length > 8) {
      setNicknameError("닉네임은 2글자 이상 8글자 이하여야 합니다.");
      setonNickError(true);
    } else {
      setNicknameError("");
      setonNickError(false);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="email" className={LoginRegLabel}>
          이메일
        </label>
        <div>
          <input
            type="text"
            className={`${RegEmailNickInput} ${onEmailError ? Error : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => handleEmailChange(e)}
            placeholder="이메일"
          />
          <span className={Duplicate}>중복확인</span>
        </div>
        {emailError && <div className={ErrorMessage}>{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password" className={LoginRegLabel}>
          비밀번호
        </label>
        <div className={PasswordInputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            className={`${LoginRegInput} ${onPasswordError ? Error : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => handleBlurPassword(e)}
            onKeyDown={handleKeyDown}
            placeholder="6자 이상 10자 이하"
          />
          {showPassword ? (
            <Image
              src={onPasswordError ? Check : Eye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Image
              src={onPasswordError ? Check : CloseEye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowPassword(true)}
            />
          )}
          {passwordError && <div className={ErrorMessage}>{passwordError}</div>}
        </div>
      </div>
      <div>
        <label htmlFor="rePassword" className={LoginRegLabel}>
          비밀번호 확인
        </label>
        <div className={PasswordInputContainer}>
          <input
            type={showRePassword ? "text" : "password"}
            className={`${LoginRegInput} ${onPasswordError ? Error : ""}`}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="6자 이상 10자 이하"
            onKeyDown={handleKeyDown}
            onBlur={handleBlurRePassword}
          />
          {showRePassword ? (
            <Image
              src={onPasswordError ? Check : Eye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowRePassword(false)}
            />
          ) : (
            <Image
              src={onPasswordError ? Check : CloseEye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowRePassword(true)}
            />
          )}
          {rePasswordError && <div className={ErrorMessage}>{rePasswordError}</div>}
        </div>
      </div>
      <div>
        <label htmlFor="nickname" className={LoginRegLabel}>
          닉네임
        </label>
        <div>
          <input
            type="text"
            className={`${RegEmailNickInput} ${onNickError ? Error : ""}`}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={(e) => handleBlurNick(e)}
            placeholder="2자 이상 8자 이하"
          />
          <span className={Duplicate}>중복확인</span>
          {nicknameError && <div className={ErrorMessage}>{nicknameError}</div>}
        </div>
      </div>
    </div>
  );
}
