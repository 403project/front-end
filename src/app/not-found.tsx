import Link from "next/link";
import Navigation from "./_component/Navigation";
import { NaviationPrimary, NavigationButton } from "@/styles/css-extracts/Navigation.css";
import Image from "next/image";

const NotFound = () => {
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
          paddingBottom: "120px",
        }}
      >
        <Image src="/starstar.svg" width={320} height={320} alt="로고" />
        <div style={{ fontWeight: "bold", fontSize: 24, fontFamily: "Pretendard" }}>잘못된 접근 이에요</div>
        <Link href={"/"} className={`${NavigationButton} ${NaviationPrimary}`} style={{ marginTop: "10px" }}>
          홈으로 가기
        </Link>
      </div>
    </>
  );
};

export default NotFound;
