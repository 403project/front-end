"use client";

import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import LoginInpuForm from "./_component/LoginInputForm";
import { LoginRegContainer } from "@/styles/css-extracts/LoginReg.css";
import LoginBottom from "./_component/LoginBottom";
import useGlobalStore from "../hooks/useGlobalStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { isLogin } = useGlobalStore();

  useEffect(() => {
    if (isLogin === true) router.push("/");
  }, [isLogin]);

  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={"로그인"} isRegPage={false}></LoginRegisterHeader>
      <LoginInpuForm />
      <LoginBottom />
    </div>
  );
}
