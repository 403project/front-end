import { ModalBox, ModalGreet, ModalSubTitle, ModalBtn } from "@/styles/css-extracts/Modal.css";
import Image from "next/image";
import loading from "../../../../public/loading.svg";
import { useRouter } from "next/navigation";

interface ICloseProps {
  handleCloseModal: () => void;
}

const DevelopModal = ({ handleCloseModal }: ICloseProps) => {
  const router = useRouter();
  const handleClose = () => {
    handleCloseModal();
  };
  return (
    <div className={ModalBox}>
      <p className={ModalGreet}>개발 중이에요</p>
      <p className={ModalSubTitle}>조금만 기달려주세요.</p>
      <Image src={loading} width={320} height={200} alt="모달창 이미지" />
      <button className={ModalBtn} onClick={handleClose}>
        기대하고 있을게요!
      </button>
    </div>
  );
};

export default DevelopModal;
