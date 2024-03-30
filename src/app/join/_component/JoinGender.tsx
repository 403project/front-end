import {
  GenderContainer,
  RegGender,
  GenderChoiceContainer,
  GenderBtn,
  selected,
} from "@/styles/css-extracts/LoginReg.css";

interface IGenderProps {
  selectedGender: string | null;
  setSelectedGender: (gender: string) => void;
}

export default function JoinGender({ selectedGender, setSelectedGender }: IGenderProps) {
  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div className={GenderContainer}>
      <span className={RegGender}>성별</span>
      <div className={GenderChoiceContainer}>
        <button
          className={`${GenderBtn} ${selectedGender === "male" ? selected : ""}`}
          onClick={() => handleGenderClick("male")}
        >
          남성
        </button>
        <button
          className={`${GenderBtn} ${selectedGender === "female" ? selected : ""}`}
          onClick={() => handleGenderClick("female")}
        >
          여성
        </button>
      </div>
    </div>
  );
}
