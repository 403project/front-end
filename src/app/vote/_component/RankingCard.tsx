import {
  leftCount,
  leftTitle,
  rankingCard,
  rankingCardLeft,
  rankingCardTotalCount,
} from "@/styles/css-extracts/Ranking.css";
import logo from "../../../../public/logo.svg";
import Image from "next/image";

const RankingCard = () => {
  return (
    <div className={rankingCard}>
      <div className={rankingCardLeft}>
        <div className={leftCount}>4</div>
        <Image width={36} height={36} src={logo} alt="아바타 이미지" />
        <div className={leftTitle}>2월 프젝</div>
      </div>
      <div className={rankingCardTotalCount}>90 별</div>
    </div>
  );
};

export default RankingCard;
