import { ProjectDescription, ProjectDescriptionContainer, ProjectTitle } from "@/styles/css-extracts/ProjectCard.css";
import Image from "next/image";
import { FooterContainer, ProjectDetailMain } from "@/styles/css-extracts/Main.css";
import axios from "axios";
import Navigation from "@/app/_component/Navigation";

import logowithtext from "../../../../public/logowithtext.svg";
import SimpleSlider from "@/app/_component/Carousel";
import VoteButton from "../_component/VoteButton";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";

type Project = {
  id: number;
  title: string;
  description: string;
  voteCount: number;
  imageUrls: string[];
  tags: string[];
};

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: project } = await axios.get<Project>(`https://api.byulbyul.store/projects/${id}`);

  return (
    <>
      <main className={ProjectDetailMain}>
        <Navigation />
        <div className={ProjectDescriptionContainer}>
          <SimpleSlider images={project.imageUrls} />
          <h2 className={ProjectTitle}>{project.title}</h2>
          <Markdown remarkPlugins={[remarkGfm]} className={"markdown-body"}>
            {project.description}
          </Markdown>
        </div>
        <VoteButton {...project} projectId={project.id} />
      </main>
      <footer className={FooterContainer}>
        <Image src={logowithtext} width={100} height={24} alt="logo" />
      </footer>
    </>
  );
}
