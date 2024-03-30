"use client";

import {
  LogoContainer,
  LogoTitle,
  Naviation,
  NaviationPrimary,
  NavigationButton,
  NavigationGroups,
  NavigationRightGroups,
} from "@/styles/css-extracts/Navigation.css";
import React, { PropsWithChildren } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import useGlobalStore from "../hooks/useGlobalStore";

const Navigation = ({ children }: PropsWithChildren) => {
  const { isLogin } = useGlobalStore();

  return (
    <nav className={Naviation}>
      <div className={LogoContainer}>
        <Link href={"/"} className={LogoContainer}>
          <Image alt="로고" src={logo} />
          <h2 className={LogoTitle}>별별투표</h2>
        </Link>
        <ul className={NavigationGroups}>
          <li>
            <Link href={"about"}>About</Link>
          </li>
          <li>
            <Link href={"projects"}>월간 프로젝트</Link>
          </li>
          <li>
            <Link href={"rank"}>랭킹</Link>
          </li>
        </ul>
      </div>
      <ul className={NavigationRightGroups}>
        <li>
          <Link href={"vote/create"}>등록하기</Link>
        </li>
        <li>
          {!isLogin ? (
            <Link className={NavigationButton} href={"login"}>
              로그인
            </Link>
          ) : (
            <Image src={"bookmark.svg"} width={32} height={32} alt="즐겨찾기" />
          )}
        </li>
        <li>
          {!isLogin ? (
            <Link className={`${NavigationButton} ${NaviationPrimary}`} href={"join"}>
              회원가입
            </Link>
          ) : (
            <Image src={"login.svg"} width={32} height={32} alt="유저" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
