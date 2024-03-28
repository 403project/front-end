import {
  HeaderContainer,
  LogoContainer,
  LogoSpan,
  LoginBar,
  Progress,
  HeaderTitle,
} from "@/styles/css-extracts/LoginRegisterNav.css";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import React from "react";

interface IRegProps {
  headerTitle: string;
  isRegPage: boolean;
  loginProcess?: number;
}

const LoginRegisterHeader = ({ headerTitle, isRegPage, loginProcess }: IRegProps) => {
  return (
    <header>
      <div className={HeaderContainer}>
        <div className={LogoContainer}>
          <Image src={logo} width={23} height={23} alt={"별별투표 로고"} />
          <span className={LogoSpan}>별별투표</span>
        </div>
        {isRegPage && loginProcess !== undefined && (
          <div className={Progress}>
            <div className={LoginBar} style={{ width: 50 * loginProcess + "%" }}></div>
          </div>
        )}
        <div className={HeaderTitle}>{headerTitle}</div>
      </div>
    </header>
  );
};

export default LoginRegisterHeader;
