import { voteCardBox, voteContainer, voteTitle, voteWrapper } from "@/styles/css-extracts/VotePage.css";
import { ReactNode } from "react";
import VoteCard from "./_component/VoteCatd";

export default function Vote(): ReactNode {
  return (
    <main className={voteContainer}>
      <div className={voteTitle}>3월의 프로젝트</div>
      <div>
        <select>
          <option>등록일 순</option>
          <option>가나다 순</option>
          <option>조회수 높은 순</option>
          <option>조회수 낮은 순</option>
        </select>
        <div className={voteWrapper}>
          <div className={voteCardBox}>
            {Array.from({ length: 5 }).map((_) => {
              return <VoteCard />;
            })}
          </div>
          <div>랭킹은 여기에</div>
        </div>
      </div>
    </main>
  );
}
