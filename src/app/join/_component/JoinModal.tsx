import { ModalBox, ModalGreet, ModalSubTitle, ModalBtn } from "@/styles/css-extracts/Modal.css";
import Image from "next/image";
import Byul from "../../../../public/byul.svg";
import { useRouter } from "next/navigation";

interface ICloseProps {
  handleCloseModal: () => void;
}

const JoinModal = ({ handleCloseModal }: ICloseProps) => {
  const router = useRouter();
  const handleClose = () => {
    handleCloseModal();
    router.push("/");
  };
  return (
    <div className={ModalBox}>
      <p className={ModalGreet}>환영합니다!</p>
      <p className={ModalSubTitle}>별 찾으러 떠나볼까요?</p>
      <Image src={Byul} width={320} height={200} alt="모달창 이미지" />
      <button className={ModalBtn} onClick={handleClose}>
        시작하기
      </button>
    </div>
  );
};

export default JoinModal;
