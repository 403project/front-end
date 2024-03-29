"use client";
import Navigation from "@/app/_component/Navigation";
import { voteCreateContainer, voteCreateTitle, voteFileWrapper } from "@/styles/css-extracts/VoteCreate.css";
import { useDropzone } from "react-dropzone";
import upload from "../../../../public/upload_image.svg";
import Image from "next/image";

export default function VoteCreate() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  return (
    <>
      <Navigation />
      <main className={voteCreateContainer}>
        <div className={voteCreateTitle}>프로젝트 등록하기</div>
        <div className={voteCreateWrapper}>
          <div {...getRootProps({ className: voteFileWrapper })}>
            <input {...getInputProps()} />
            <p>
              <Image src={upload} width={24} height={24} alt="이미지 업로드" />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
