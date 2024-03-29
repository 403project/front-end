import {
  rankingContainer,
  rankingTopWrapper,
  rankingBottomWrapper,
  rankingHeaderBox,
  headerTitle,
  headerSubTitle,
  headerRankingBox,
  headerLine,
  rankingCard,
  rankingCardLeft,
  leftCount,
  leftTitle,
  rankingCardTotalCount,
} from "@/styles/css-extracts/Ranking.css";

import logo from "../../../../public/logo.svg";
import Image from "next/image";
import Avatar from "./Avatar";
import RankingCard from "./RankingCard";

const Ranking = () => {
  return (
    <section className={rankingContainer}>
      <header className={rankingTopWrapper}>
        <div className={rankingHeaderBox}>
          <div className={headerTitle}>3월 랭킹</div>
          <Image width={23} height={23} src={logo} alt="별별투표 로고" />
        </div>
        <div className={headerSubTitle}>실시간 투표 수</div>
        <div className={headerLine}></div>
        <div className={headerRankingBox}>
          {Array.from({ length: 3 }).map((_) => {
            return <Avatar />;
          })}
        </div>
      </header>
      <div className={rankingBottomWrapper}>
        {Array.from({ length: 5 }).map((_) => {
          return <RankingCard />;
        })}
      </div>
    </section>
  );
};

export default Ranking;
