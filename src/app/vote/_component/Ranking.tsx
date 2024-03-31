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
import axios from "axios";

type Ranks = {
  id: number;
  title: string;
  description: string;
  voteCount: number;
  repImageUrl: string;
};

const Ranking = async ({ params }: { params: { id?: string } }) => {
  const { data } = await axios.get<{ projects: Ranks[] }>(`https://api.byulbyul.store/polls/${params?.id ?? 1}`);
  const projects = data.projects.sort((a, b) => b.voteCount - a.voteCount);
  return (
    <section className={rankingContainer}>
      <header className={rankingTopWrapper}>
        <div className={rankingHeaderBox}>
          <div className={headerTitle}>랭킹</div>
          <Image width={23} height={23} src={logo} alt="별별투표 로고" />
        </div>
        <div className={headerSubTitle}>실시간 투표 수</div>
        <div className={headerLine}></div>
      </header>
      <section className={rankingBottomWrapper}>
        {projects?.slice(0, 5).map((rank, index) => {
          return <RankingCard index={index} {...rank} />;
        })}
      </section>
    </section>
  );
};

export default Ranking;
