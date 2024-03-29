import { useState } from "react";
import {
  JoinFieldContainer,
  FieldType,
  DropdownContainer,
  DropdownBox,
  ArrowImg,
  DropDownOptionContainer,
  DropdownSpan,
  DropDownOption,
} from "@/styles/css-extracts/LoginReg.css";
import down_direction from "../../../../public/down-direction.svg";
import up_direction from "../../../../public/up-direction.svg";
import Image from "next/image";

interface IWritingCategoryProps {
  selectedOption: string | null;
  OnSelectedOption: (option: string) => void;
}

export default function JoinField({ selectedOption, OnSelectedOption }: IWritingCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "웹개발_프론트엔드",
    "웹개발_백엔드",
    "웹개발_풀스택",
    "마케팅/마케터",
    "프로덕트매니저 (PM)",
    "커뮤니티매니저 (CM)",
    "C레벨",
    "오퍼레이터",
    "크리에이터",
    "서비스",
    "투자심사역",
    "프리랜서",
    "founder / co-founder",
    "소프트웨어/시스템 엔지니어",
    "SI/SM",
    "앱개발",
    "게임개발",
    "데이터개발",
    "딥러닝/머신러닝/AI",
    "학생",
    "기타",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    OnSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={JoinFieldContainer}>
      <span className={FieldType}>업무 분야</span>
      <div className={DropdownContainer}>
        <div className={DropdownBox} onClick={toggleDropdown}>
          <span className={DropdownSpan}>{selectedOption ? selectedOption : "카테고리를 선택해주세요."}</span>
          <Image
            src={isOpen ? up_direction : down_direction}
            alt="화살표 아이콘"
            width={24}
            height={24}
            className={ArrowImg}
          />
        </div>
        {isOpen && (
          <div className={DropDownOptionContainer}>
            {options.map((option) => (
              <div key={option} onClick={() => handleOptionClick(option)} className={DropDownOption}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
