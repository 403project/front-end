"use client";
import React from "react";
import useGetPolls from "../hooks/useGetPolls";
import {
  ProjectBox,
  ProjectBorder,
  ProjectContainer,
  ProjectImageContainer,
  ProjectImage,
  ProjectContentContainer,
  ProjectBadge,
  ProjectPrimaryBadge,
  ProjectNormalBadge,
  ProjectTextTitle,
  ProjectDate,
  ProjectVoteButtonContainer,
  ProjectVoteButton,
} from "@/styles/css-extracts/ProjectCard.css";
import Link from "next/link";
import logowithtext from "../../../../public/logowithtext.svg";
import Image from "next/image";

type ProjectCardProps = {
  image?: string;
  status: string;
  title: string;
  date: string;
};

const PollCard = ({ date, status, title, image }: ProjectCardProps) => {
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

export default PollCard;
