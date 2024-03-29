"use client";
import {
  voteCardBox,
  voteContainer,
  voteTitle,
  voteWrapper,
  rankingBox,
  voteSelect,
} from "@/styles/css-extracts/VotePage.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import VoteCard from "./_component/VoteCatd";
import Ranking from "./_component/Ranking";

export default function Vote(): ReactNode {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const voteCardRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const activeRef = voteCardRefs.current[activeCardIndex];
      if (activeRef && !activeRef.contains(event.target)) {
        setActiveCardIndex(-1); // Close the active card if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCardIndex]);
  return (
    <main className={voteContainer}>
      <div className={voteTitle}>3월의 프로젝트</div>
      <div>
        <select className={voteSelect}>
          <option defaultChecked>전체</option>
          <option>등록일 순</option>
          <option>가나다 순</option>
          <option>조회수 높은 순</option>
          <option>조회수 낮은 순</option>
        </select>
        <div className={voteWrapper}>
          <div className={voteCardBox}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <VoteCard
                  key={index}
                  ref={(el) => (voteCardRefs.current[index] = el)}
                  isActive={index === activeCardIndex}
                  onMoreClick={() => setActiveCardIndex(index === activeCardIndex ? -1 : index)}
                />
              );
            })}
          </div>
          <div className={rankingBox}>
            <Ranking />
          </div>
        </div>
      </div>
    </main>
  );
}
