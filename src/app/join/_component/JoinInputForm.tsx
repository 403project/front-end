"use client";

import {
  LoginRegInput,
  LoginRegLabel,
  PasswordInputContainer,
  ShowPasswordImg,
  RegEmailNickInput,
  Duplicate,
  ErrorMessage,
} from "@/styles/css-extracts/LoginInput.css";
import CloseEye from "../../../../public/closeeye.svg";
import Eye from "../../../../public/eye.svg";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";

const JoinInputForm = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const router = useRouter();

  return (
    <div>
      <div>
        <label htmlFor="email" className={LoginRegLabel}>
          이메일
        </label>
        <div>
          <input
            type="text"
            className={RegEmailNickInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
          />
          <span className={Duplicate}>중복확인</span>
        </div>
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
            placeholder="6자 이상"
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
      <div>
        <label htmlFor="rePassword" className={LoginRegLabel}>
          비밀번호 확인
        </label>
        <div className={PasswordInputContainer}>
          <input
            type={showRePassword ? "text" : "password"}
            className={LoginRegInput}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="6자 이상"
          />
          {showRePassword ? (
            <Image
              src={Eye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowRePassword(false)}
            />
          ) : (
            <Image
              src={CloseEye}
              width={24}
              height={24}
              className={ShowPasswordImg}
              alt="비밀번호 확인 이미지"
              onClick={() => setShowRePassword(true)}
            />
          )}
        </div>
      </div>
      <div>
        <label htmlFor="nickname" className={LoginRegLabel}>
          닉네임
        </label>
        <div>
          <input
            type="text"
            className={RegEmailNickInput}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="2자 이상"
          />
          <span className={Duplicate}>중복확인</span>
        </div>
      </div>
    </div>
  );
};

export default JoinInputForm;
