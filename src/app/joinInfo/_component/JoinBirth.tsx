import { BirthContainer } from "@/styles/css-extracts/LoginReg.css";
import { LoginRegInput } from "@/styles/css-extracts/LoginInput.css";

interface JoinBirthProps {
  birthYear: string;
  handleBirthYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function JoinBirth({ birthYear, handleBirthYearChange }: JoinBirthProps) {
  return (
    <div className={BirthContainer}>
      <span>출생연도</span>
      <input
        type="text"
        className={LoginRegInput}
        maxLength={4}
        placeholder="0000"
        value={birthYear}
        onChange={handleBirthYearChange}
      />
    </div>
  );
}
