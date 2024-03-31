"use client";
import {
  ProjectVoteContainer,
  ProjectVoteDescription,
  ProjectVotePrimaryButton,
  ProjectVoteTag,
  ProjectVoteTagWrapper,
  ProjectVoteWrapper,
} from "@/styles/css-extracts/ProjectCard.css";
import { useMutation } from "@tanstack/react-query";
import React from "react";

type Props = {
  projectId: number;
  title: string;
  description: string;
  voteCount: number;
  imageUrls: string[];
  tags: string[];
};

const fetcher = (projectId: number | string) =>
  fetch(`https://api.byulbyul.store/polls/vote?projectId=${projectId}`, {
    credentials: "include",
    method: "get",
  });

const VoteButton = ({ title, tags, description, projectId }: Props) => {
  const { mutate } = useMutation({
    mutationFn: () => fetcher(projectId),
    onSuccess: () => {
      console.log("성공");
    },
    onError: () => {
      console.log("ERROR");
    },
  });

  const onClickVoteButton = () => {
    mutate();
  };

  return (
    <div className={ProjectVoteContainer}>
      <div className={ProjectVoteWrapper}>
        <p>{title}</p>
        <p className={ProjectVoteDescription}>{description}</p>
        <div className={ProjectVoteTagWrapper}>
          {tags?.map((tag) => (
            <span className={ProjectVoteTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button onClick={onClickVoteButton} className={`${ProjectVotePrimaryButton}`}>
        투표하기
      </button>
    </div>
  );
};

export default VoteButton;
