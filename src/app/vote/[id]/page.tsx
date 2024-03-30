import { Main } from "@/styles/css-extracts/Header.css";
import { ProjectsContainer } from "@/styles/css-extracts/ProjectCard.css";
import Image from "next/image";
import { FooterContainer, MainContainer, RankingContainer, RankingWrapper } from "@/styles/css-extracts/Main.css";
import axios from "axios";
import Ranking from "../_component/Ranking";
import Navigation from "@/app/_component/Navigation";

import logowithtext from "../../../../public/logowithtext.svg";
import { PageProps } from "../../../../.next/types/app/vote/[id]/page";

type Project = {
  id: number;
  title: string;
  description: string;
  voteCount: number;
};

export default async function Home({ params }: PageProps) {
  const { id } = params;
  const { data: project } = await axios.get<Project>(`https://api.byulbyul.store/projects/${id}`);

  return (
    <>
      <main className={MainContainer}>
        <Navigation />
        <div className={Main}>
          <h2>{project.title}</h2>
          <h2>{project.description}</h2>
          <div className={ProjectsContainer}></div>
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
