"use client";
import {
  voteBadge,
  voteCardContainer,
  voteCardContent,
  voteCardDescription,
  voteCardFooter,
  voteCardHeader,
  voteCardMore,
  voteCardMoreButton,
  voteCardTitle,
  voteImage,
  voteSetting,
  voteSettingButton,
} from "@/styles/css-extracts/VoteCard.css";
import Badge from "./Badge";

import Image from "next/image";
import like from "../../../../public/heart.svg";
import activeLike from "../../../../public/active_heart.svg";
import more from "../../../../public/more.svg";
import { useState, forwardRef } from "react";
import { Project } from "../page";

type Props = {
  isActive?: boolean;
  setActiveCardIndex: any;
  list: Project;
};

const defaultImage = "https://images.prlc.kr/byulbyul.png";
const 말줄임길이 = 80;

const VoteCard = forwardRef(({ isActive, setActiveCardIndex, list }: Props, ref: any) => {
  const { voteCount, title, id, description } = list;
  const [isMore, setIsMore] = useState(false);

  return (
    <div ref={ref} className={voteCardContainer}>
      <div className={voteCardHeader}>
        {/* <div className={voteBadge}>진행중</div> */}
        <img
          className={voteImage}
          src={list.imageUrls?.[0] ?? defaultImage}
          alt="투표 이미지"
          width={300}
          height={180}
        />

        {/* <div className={voteSetting}>
          <div className={voteSettingButton}>
            <Image src={activeLike} width={20} height={20} alt="좋아요" />
          </div>
          <div style={{ marginRight: 6 }} />
          <div className={voteSettingButton} onClick={onMoreClick}>
            <Image src={more} width={20} height={20} alt="더보기" />
          </div>
        </div> */}
      </div>
      <div className={voteCardContent}>
        <div className={voteCardTitle}>{title}</div>
        <div className={voteCardDescription}>
          {description.slice(0, 말줄임길이) + (description.length > 말줄임길이 ? " ..." : "")}
        </div>
      </div>
      <div className={voteCardFooter}>
        {list?.tags?.map((tag) => {
          return <Badge>{tag}</Badge>;
        })}
      </div>
      {isActive && (
        <div className={voteCardMore}>
          <div
            className={voteCardMoreButton}
            onClick={() => {
              setActiveCardIndex(-1);
              console.log("공유하기");
            }}
          >
            공유하기
          </div>
          <div
            className={voteCardMoreButton}
            onClick={() => {
              setActiveCardIndex(-1);
              console.log("신고하기");
            }}
          >
            신고하기
          </div>
        </div>
      )}
    </div>
  );
});

export default VoteCard;
