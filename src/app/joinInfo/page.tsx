"use client";

import { LoginBtn } from "@/styles/css-extracts/Btn.css";
import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import { LoginRegContainer } from "@/styles/css-extracts/LoginReg.css";
import { useRouter } from "next/navigation";

export default function Join() {
  const router = useRouter();
  const nextBtn = () => {
    router.push("/joininfo");
  };
  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={"회원가입"} isRegPage={true} loginProcess={2} />
    </div>
  );
}
