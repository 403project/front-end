import Navigation from "./Navigation";
import Image from "next/image";
import loading from "../../../public/loading.svg";

const Loading = () => {
  return (
    <>
      <Navigation />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Image src={loading} width={320} height={320} alt="로고" />
        <div style={{ fontWeight: "bold", fontSize: 24, fontFamily: "Pretendard" }}>조금만 기다려주세요...</div>
      </div>
    </>
  );
};

export default Loading;
