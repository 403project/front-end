import { BirthContainer } from "@/styles/css-extracts/LoginReg.css";
import { LoginRegInput } from "@/styles/css-extracts/LoginInput.css";
import { useState } from "react";
import { ErrorMessage, Error } from "@/styles/css-extracts/LoginInput.css";

interface JoinBirthProps {
  birthYear: string;
  handleBirthYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function JoinBirth({ birthYear, handleBirthYearChange }: JoinBirthProps) {
  const [error, setError] = useState<string>("");

  const validateBirthYear = (year: string) => {
    const birthYear = parseInt(year);
    if (birthYear < 1924 || birthYear > 2009) {
      setError("올바른 출생연도를 입력해주세요.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    validateBirthYear(birthYear);
  };

  return (
    <div className={BirthContainer}>
      <span>출생연도</span>
      <input
        type="text"
        className={`${LoginRegInput} ${error ? Error : ""}`}
        maxLength={4}
        placeholder="0000"
        value={birthYear}
        onChange={handleBirthYearChange}
        onBlur={handleBlur}
      />
      {error && <div className={ErrorMessage}>{error}</div>}
    </div>
  );
}
