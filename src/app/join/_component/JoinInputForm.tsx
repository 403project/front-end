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
  Focused,
  EmailInputContainer,
  ImgContainer,
  NickNameContainer,
} from "@/styles/css-extracts/LoginInput.css";
import CloseEye from "../../../../public/closeeye.svg";
import Eye from "../../../../public/eye.svg";
import Check from "../../../../public/check.svg";
import Cancel from "../../../../public/cancel.svg";
import Image from "next/image";
import { getEmailInputClasses, checkRegistrationSuccess } from "../util";
import { validateEmail } from "../validation";

import { useState, useEffect, FocusEvent, KeyboardEvent } from "react";

interface JoinInputFormProps {
  oneSuccess: boolean;
  setOneSuccess: (value: boolean) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  nickname: string;
  setNickname: (value: string) => void;
}

export default function JoinInputForm({
  oneSuccess,
  setOneSuccess,
  email,
  setEmail,
  password,
  setPassword,
  nickname,
  setNickname,
}: JoinInputFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const [rePassword, setRePassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rePasswordError, setRePasswordError] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");

  const [onEmailError, setOnEmailError] = useState<boolean>(false);
  const [onPasswordError, setOnPasswordError] = useState<boolean>(false);
  const [onNickError, setonNickError] = useState<boolean>(false);

  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const [rePasswordFocused, setRePasswordFocused] = useState<boolean>(false);
  const [nickNameFocused, setNickNameFocused] = useState<boolean>(false);

  useEffect(() => {
    checkRegistrationSuccess(
      email,
      password,
      rePassword,
      nickname,
      emailError,
      passwordError,
      rePasswordError,
      nicknameError,
      setOneSuccess,
    );
  }, [email, password, rePassword, nickname, emailError, passwordError, rePasswordError, nicknameError, setOneSuccess]);

  const handleEmailChange = (e: FocusEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.trim();
    setEmail(newEmail);
    if (newEmail !== "" && !validateEmail(newEmail)) {
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
    if ((value !== "" && value.length < 6) || value.length > 15) {
      setPasswordError("비밀번호는 6자 이상 15자 이하여야 합니다.");
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

  const clearInputValue = (inputType: string) => {
    switch (inputType) {
      case "email":
        setEmail("");
        break;
      case "password":
        setPassword("");
        break;
      case "rePassword":
        setRePassword("");
        break;
      case "nickname":
        setNickname("");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="email" className={LoginRegLabel}>
          이메일
        </label>
        <div className={EmailInputContainer}>
          <input
            type="text"
            className={getEmailInputClasses(onEmailError, emailFocused, RegEmailNickInput, Error, Focused)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={(e) => {
              setEmailFocused(false);
              handleEmailChange(e);
            }}
            placeholder="이메일"
          />
          {emailFocused && email && (
            <div className={ImgContainer}>
              <Image
                src={Cancel}
                alt="Cancel"
                onMouseDown={(e) => {
                  e.preventDefault();
                  clearInputValue("email");
                }}
              />
            </div>
          )}
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
            className={getEmailInputClasses(onPasswordError, passwordFocused, LoginRegInput, Error, Focused)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={(e) => {
              setPasswordFocused(false);
              handleBlurPassword(e);
            }}
            onKeyDown={handleKeyDown}
            placeholder="6자 이상 15자 이하"
            maxLength={15}
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
            className={getEmailInputClasses(onPasswordError, rePasswordFocused, LoginRegInput, Error, Focused)}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="6자 이상 15자 이하"
            onKeyDown={handleKeyDown}
            onBlur={() => {
              setRePasswordFocused(false);
              handleBlurRePassword();
            }}
            onFocus={() => setRePasswordFocused(true)}
            maxLength={15}
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
        <div className={NickNameContainer}>
          <input
            type="text"
            className={getEmailInputClasses(onNickError, nickNameFocused, RegEmailNickInput, Error, Focused)}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={(e) => {
              setNickNameFocused(false);
              handleBlurNick(e);
            }}
            onFocus={() => setNickNameFocused(true)}
            placeholder="2자 이상 8자 이하"
            maxLength={8}
          />
          {nickNameFocused && nickname && (
            <div className={ImgContainer}>
              <Image
                src={Cancel}
                alt="Cancel"
                onMouseDown={(e) => {
                  e.preventDefault();
                  clearInputValue("nickname");
                }}
              />
            </div>
          )}
          <span className={Duplicate}>중복확인</span>
          {nicknameError && <div className={ErrorMessage}>{nicknameError}</div>}
        </div>
      </div>
    </div>
  );
}
