import { LogoContainer, LogoTitle, Naviation } from "@/styles/css-extracts/Navigation.css";
import React, { PropsWithChildren } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";

const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <header>
      <nav className={Naviation}>
        <div className={LogoContainer}>
          <Image alt="로고" src={logo} />
          <h2 className={LogoTitle}>별별투표</h2>
        </div>
        {children}
      </nav>
    </header>
  );
};

export default Navigation;
