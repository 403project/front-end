"use client";

import {
  LogoContainer,
  LogoTitle,
  Naviation,
  NaviationPrimary,
  NavigationButton,
  NavigationGroups,
  NavigationRightFirstButton,
  NavigationRightGroups,
} from "@/styles/css-extracts/Navigation.css";
import React, { PropsWithChildren, useState } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import useGlobalStore from "../hooks/useGlobalStore";
import useStore from "@/app/hooks/useStore";
import bookmark from "../../../public/bookmark.svg";
import login from "../../../public/login.svg";

const Navigation = ({ children }: PropsWithChildren) => {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const isLogin = useStore(useGlobalStore, (state) => state.isLogin);
  const { setIsLogin } = useGlobalStore();

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <nav className={Naviation}>
      <div className={LogoContainer}>
        <Link href={"/"} className={LogoContainer}>
          <Image alt="로고" src={logo} />
          <h2 className={LogoTitle}>별별투표</h2>
        </Link>
        <ul className={NavigationGroups}>
          <li>
            <Link href={"projects"}>월간 프로젝트</Link>
          </li>
          <li>
            <Link href={"rank"}>랭킹</Link>
          </li>
        </ul>
      </div>
      <ul className={NavigationRightGroups}>
        <li className={NavigationRightFirstButton}>
          <Link href={"vote/create"}>등록하기</Link>
        </li>
        <li>
          {!isLogin ? (
            <Link className={NavigationButton} href={"login"}>
              로그인
            </Link>
          ) : (
            <Image src={bookmark} width={32} height={32} alt="즐겨찾기" />
          )}
        </li>
        <li>
          {!isLogin ? (
            <Link className={`${NavigationButton} ${NaviationPrimary}`} href={"join"}>
              회원가입
            </Link>
          ) : (
            <button style={{ position: "relative" }}>
              <Image onClick={() => setIsUserClicked((prev) => !prev)} src={login} width={32} height={32} alt="유저" />
              {isUserClicked && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0px",
                    wordBreak: "keep-all",
                    width: "fit-content",
                    border: "1px solid #d9d9d9",
                    borderRadius: 6,
                    background: "white",
                  }}
                >
                  <li
                    onClick={onClickLogout}
                    style={{ padding: "6px 12px", fontFamily: "Pretendard", fontSize: "14px", color: "#444" }}
                  >
                    로그아웃
                  </li>
                </ul>
              )}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
