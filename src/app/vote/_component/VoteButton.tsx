"use client";
import {
  ProjectVoteContainer,
  ProjectVoteDescription,
  ProjectVotePrimaryButton,
  ProjectVoteTag,
  ProjectVoteTagWrapper,
  ProjectVoteWrapper,
  ToastStyle,
} from "@/styles/css-extracts/ProjectCard.css";
import { useToast, ToastOptionType } from "@jaewoong2/toast";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { ModalProvider } from "@jaewoong2/modal";
import axios from "axios";
import useStore from "@/app/hooks/useStore";
import useGlobalStore from "@/app/hooks/useGlobalStore";
import { useModal } from "@jaewoong2/modal";
import { ToastProvider } from "@jaewoong2/toast";
import { vars } from "@/styles/variants/variants.css";

type Props = {
  projectId: number;
  title: string;
  description: string;
  voteCount: number;
  imageUrls: string[];
  tags: string[];
};

type Join = {
  email: string;
  password: string;
  nickname: string;
  gender: string;
  birthYear: number;
  occupation: string;
};

const options = { type: "normal" };
const fetcher = (projectId: number | string) =>
  fetch(`https://api.byulbyul.store/polls/vote?projectId=${projectId}`, {
    credentials: "include",
    method: "get",
  });

const joinFetcher = (data: Join) => axios.post(`https://api.byulbyul.store/users/sign-up`, data);

const VoteButton = (props: Props) => {
  return (
    <ToastProvider>
      <ModalProvider>
        <VoteButton_ {...props} />
      </ModalProvider>
    </ToastProvider>
  );
};

const VoteButton_ = ({ title, tags, description, projectId }: Props) => {
  const isLogin = useStore(useGlobalStore, (state) => state.isLogin);
  const toast = useToast(`${title} - 투표 완료!`, {
    color: "white",
    backgroundColor: vars.primary[100],
    position: "top",
    width: 250,
  });
  const [email, setEmail] = useState("");
  const { show, hide } = useModal({
    type: "button",
    message: (
      <div>
        <label
          style={{
            color: "#666",
            padding: "6px 4px",
            marginBottom: "4px",
            fontSize: "15px",
          }}
        >
          이메일
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginTop: "10px",
            width: "100%",
            height: "52px",
            padding: "12px 6px",
            border: "1px solid #d9d9d9",
            borderRadius: "8px",
          }}
          placeholder="example@example.com"
        />
      </div>
    ),
    src: "https://images.prlc.kr/byulbyul.png",
    buttonText: "투표하기",
    header: (
      <h1
        style={{
          marginTop: "10px",
          width: "100%",
          height: "52px",
          padding: "12px 6px",
          borderBottom: "1px solid #d9d9d9",
          fontWeight: 600,
          fontFamily: "Pretendard",
        }}
      >
        {title}- 투표하기
      </h1>
    ),
    onClickButton: async () => {
      if (email) {
        join();
      } else {
        window.alert("이메일을 입력해주세요.");
      }
    },
  });

  const { mutate } = useMutation({
    mutationFn: () => fetcher(projectId),
    onSuccess: () => {
      console.log("성공");
      toast.show();
      hide();
    },
    onError: () => {
      console.log("ERROR");
    },
  });
  const key = `${new Date().getTime() * new Date().getMilliseconds()}`.slice(0, 8);

  const { mutate: join } = useMutation({
    mutationFn: () =>
      joinFetcher({
        email: `${key}-${email}`,
        birthYear: 2000,
        gender: "비회원",
        nickname: key,
        occupation: "비회원",
        password: key,
      }),
    onSuccess: () => {
      console.log("회원가입 성공");
      mutate();
    },
    onError: () => {
      console.log("ERROR");
    },
  });

  const onClickVoteButton = () => {
    if (isLogin) {
      mutate();
      return;
    }
    show();
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
