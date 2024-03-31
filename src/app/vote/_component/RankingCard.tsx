import {
  leftCount,
  leftTitle,
  rankingCard,
  rankingCardLeft,
  rankingCardTotalCount,
} from "@/styles/css-extracts/Ranking.css";
import logo from "../../../../public/logo.svg";
import Image from "next/image";

type Props = {
  title: string;
  repImageUrl: string;
  voteCount: number;
  index: number;
};

const RankingCard = ({ title, repImageUrl, index, voteCount }: Props) => {
  return (
    <div className={rankingCard}>
      <div className={rankingCardLeft}>
        <div className={leftCount}>{index}</div>
        <img
          width={36}
          height={36}
          src={repImageUrl ? repImageUrl : "https://images.prlc.kr/byulbyul.png"}
          alt="아바타 이미지"
        />
        <div className={leftTitle}>{title}</div>
      </div>
      <div className={rankingCardTotalCount}>{voteCount * 10} 별</div>
    </div>
  );
};

export default RankingCard;
