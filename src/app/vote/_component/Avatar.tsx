import {
  AvatarContainer,
  AvatarBox,
  AvatarCount,
  AvatarImgBox,
  AvatarImg,
  AvartarTitle,
  AvatarTotalCount,
} from "@/styles/css-extracts/Avatar.css";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className={AvatarContainer}>
      <div className={AvatarBox}>
        <div className={AvatarCount}>1</div>
        <div className={AvatarImgBox}>
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg"
            alt="아바타 이미지"
            priority
            className={AvatarImg}
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className={AvartarTitle}>3월 프로젝트</div>
      <div className={AvatarTotalCount}>150 별</div>
    </div>
  );
};

export default Avatar;
