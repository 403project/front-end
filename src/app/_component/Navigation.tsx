import { LogoContainer, LogoTitle, Naviation } from "@/styles/css-extracts/Navigation.css";
import React, { PropsWithChildren } from "react";

const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <header>
      <nav className={Naviation}>
        <div className={LogoContainer}>
          <img alt="로고" src="" />
          <h2 className={LogoTitle}>별별투표</h2>
        </div>
        {children}
      </nav>
    </header>
  );
};

export default Navigation;
