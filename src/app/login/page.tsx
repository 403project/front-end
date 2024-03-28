import LoginRegisterHeader from "../_component/LoginRegisterHeader";
import LoginInpuForm from "./_component/LoginInputForm";
import { LoginRegContainer } from "@/styles/css-extracts/LoginReg.css";
import LoginBottom from "./_component/LoginBottom";
import { LoginBtn } from "@/styles/css-extracts/Btn.css";

export default function Login() {
  return (
    <div className={LoginRegContainer}>
      <LoginRegisterHeader headerTitle={"로그인"} isRegPage={false}></LoginRegisterHeader>
      <LoginInpuForm />
      <LoginBottom />
    </div>
  );
}
