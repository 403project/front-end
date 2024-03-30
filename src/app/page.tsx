import { Main } from "@/styles/css-extracts/Header.css";
import Navigation from "./_component/Navigation";
import {
  ProjectBorder,
  ProjectBox,
  ProjectImage,
  ProjectTextTitle,
  ProjectContainer,
  ProjectContentContainer,
  ProjectBadge,
  ProjectDate,
  ProjectVoteButton,
  ProjectVoteButtonContainer,
  ProjectPrimaryBadge,
  ProjectNormalBadge,
  ProjectsContainer,
  ProjectMoreButton,
  ProjectMoreButtonRightArrow,
  ProjectImageContainer,
} from "@/styles/css-extracts/ProjectCard.css";
import Image from "next/image";
import Link from "next/link";
import Ranking from "./vote/_component/Ranking";
import { FooterContainer, MainContainer, RankingContainer, RankingWrapper } from "@/styles/css-extracts/Main.css";

import logowithtext from "../../public/logowithtext.svg";
import RightArrow from "../../public/RightArrow.svg";

type ProjectCardProps = {
  image?: string;
  status: string;
  title: string;
  date: string;
};

const ProjectCard = ({ date, status, title, image }: ProjectCardProps) => {
  return (
    <div className={`${ProjectBox} ${ProjectBorder}`}>
      <div className={ProjectContainer}>
        <div className={ProjectImageContainer}>
          <Image src={image ?? logowithtext} className={ProjectImage} width={100} height={100} alt="projectImage" />
        </div>
        <div className={ProjectContentContainer}>
          <div className={`${ProjectBadge} ${status === "진행 중" ? ProjectPrimaryBadge : ProjectNormalBadge}`}>
            {status}
          </div>
          <div className={ProjectTextTitle}>{title}</div>
          <div className={ProjectDate}>{date}</div>
        </div>
      </div>
      <div className={ProjectVoteButtonContainer}>
        <Link href={"vote"} className={ProjectVoteButton}>
          {status === "진행 중" ? "투표하기" : "결과보기"}
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className={MainContainer}>
        <Navigation />
        <div className={Main}>
          <h2>프로젝트 둘러보기</h2>
          <div className={ProjectsContainer}>
            <ProjectCard status="진행 중" title="3월의 프로젝트" date="2024.03.01 - 2024.03.25" />
            <ProjectCard status="진행완료" title="2월의 프로젝트" date="2024.02.01 - 2024.02.25" />
            <ProjectCard status="진행완료" title="1월의 프로젝트" date="2024.01.01 - 2024.01.25" />
            <button className={`${ProjectMoreButton}`}>
              프로젝트 더보기
              <Image src={RightArrow} className={ProjectMoreButtonRightArrow} alt="rightArrow" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className={RankingContainer}>
          <div className={RankingWrapper}>
            <Ranking />
          </div>
          {/* <div
          style={{
            marginTop: "80px",
            maxWidth: "370px",
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
            padding: "30px 37px",
            backgroundColor: "#3E74FE",
            color: "white",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ gap: "9px", display: "flex", flexDirection: "column" }}>
              <p>전체 랭킹</p>
              <p style={{ fontSize: "14px", color: "#E6E6E6" }}>실시간 투표 수</p>
            </div>
            <Image src={"logo.svg"} width={24} height={24} alt="logo" />
          </div>
          <div style={{ height: "1px", margin: "20px 0", width: "100%", backgroundColor: "#8BACFE" }} />
        </div> */}
        </div>
      </main>
      <footer className={FooterContainer}>
        <Image src={"/logowithtext.svg"} width={100} height={24} alt="logo" />
      </footer>
    </>
  );
}
