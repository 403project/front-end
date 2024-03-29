import { GenderContainer, RegGender, GenderChoiceContainer, GenderBtn } from "@/styles/css-extracts/LoginReg.css";

export default function JoinGender() {
  return (
    <div className={GenderContainer}>
      <span className={RegGender}>성별</span>
      <div className={GenderChoiceContainer}>
        <button className={GenderBtn}>남성</button>
        <button className={GenderBtn}>여성</button>
      </div>
    </div>
  );
}
