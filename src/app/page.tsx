import { Main } from "@/styles/css-extracts/Header.css";
import Navigation from "./_component/Navigation";
import {
  ProjectsContainer,
  ProjectMoreButton,
  ProjectMoreButtonRightArrow,
} from "@/styles/css-extracts/ProjectCard.css";
import Image from "next/image";
import Link from "next/link";
import Ranking from "./vote/_component/Ranking";
import { FooterContainer, MainContainer, RankingContainer, RankingWrapper } from "@/styles/css-extracts/Main.css";

import logowithtext from "../../public/logowithtext.svg";
import RightArrow from "../../public/RightArrow.svg";
import axios from "axios";
import PollCard from "./_component/PollCard";

type Poll = {
  id: number;
  title: string;
  ongoing: boolean;
  startDate: string;
  endDate: string;
};

export default async function Home() {
  const { data } = await axios.get<{ polls: Poll[] }>("https://api.byulbyul.store/polls");
  const polls = data?.polls.map(({ ongoing, startDate, endDate, ...poll }) => ({
    ongoing: ongoing ? "진행 중" : "진행완료",
    startDate: startDate.slice(0, 10),
    endDate: endDate.slice(0, 10),
    ...poll,
  }));

  return (
    <>
      <main className={MainContainer}>
        <Navigation />
        <div className={Main}>
          <h2>프로젝트 둘러보기</h2>
          <div className={ProjectsContainer}>
            {polls.map(({ endDate, id, ongoing, startDate, title }) => (
              <PollCard id={id} key={id} status={ongoing} title={title} date={`${startDate} ~ ${endDate}`} />
            ))}
            {polls.length > 3 && (
              <Link href={"more"} className={`${ProjectMoreButton}`}>
                프로젝트 더보기
                <Image
                  src={RightArrow}
                  className={ProjectMoreButtonRightArrow}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </Link>
            )}
          </div>
        </div>
        <div className={RankingContainer}>
          <div className={RankingWrapper}>
            <Ranking />
          </div>
        </div>
      </main>
      <footer className={FooterContainer}>
        <Image src={logowithtext} width={100} height={24} alt="logo" />
      </footer>
    </>
  );
}
