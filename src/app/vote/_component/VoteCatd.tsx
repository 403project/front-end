import {
  voteBadge,
  voteCardContainer,
  voteCardContent,
  voteCardDescription,
  voteCardFooter,
  voteCardHeader,
  voteCardTitle,
  voteContent,
  voteImage,
  voteSetting,
  voteSettingButton,
} from "@/styles/css-extracts/VoteCard.css";
import Badge from "./Badge";

import Image from "next/image";
import like from "../../../../public/heart.svg";
import more from "../../../../public/more.svg";

const VoteCard = () => {
  return (
    <div className={voteCardContainer}>
      <div className={voteCardHeader}>
        <div className={voteBadge}>진행중</div>
        <Image
          className={voteImage}
          src="https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg"
          alt="투표 이미지"
          width={300}
          height={180}
        />
        <div className={voteSetting}>
          <div className={voteSettingButton}>
            <Image src={like} width={20} height={20} alt="좋아요" />
          </div>
          <div style={{ marginRight: 6 }} />
          <div className={voteSettingButton}>
            <Image src={more} width={20} height={20} alt="더보기" />
          </div>
        </div>
      </div>
      <div className={voteCardContent}>
        <div className={voteCardTitle}>3월 프로젝트</div>
        <div className={voteCardDescription}>일상을 바꾸는 약속 지킴이 프로젝트</div>
      </div>
      <div className={voteCardFooter}>
        {Array.from({ length: 3 }).map((_) => {
          return <Badge />;
        })}
      </div>
    </div>
  );
};

export default VoteCard;
