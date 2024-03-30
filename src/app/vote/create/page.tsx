"use client";
import Navigation from "@/app/_component/Navigation";
import {
  voteCreateContainer,
  voteCreateTitle,
  voteFileWrapper,
  voteCreateWrapper,
  createBox,
  inputStyle,
  inputLabel,
  textareaStyle,
  tagLimitLabel,
  saveWrapper,
  confirmButton,
  saveButton,
} from "@/styles/css-extracts/VoteCreate.css";
import { useDropzone } from "react-dropzone";
import upload from "../../../../public/upload_image.svg";
import Image from "next/image";
import { useState } from "react";

export default function VoteCreate() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  return (
    <>
      <Navigation />
      <main className={voteCreateContainer}>
        <div className={voteCreateTitle}>프로젝트 등록하기</div>
        <div className={voteCreateWrapper}>
          <div className={createBox}>
            <label className={inputLabel}></label>
            <div {...getRootProps({ className: voteFileWrapper })}>
              <input {...getInputProps()} />
              <p>
                <Image src={upload} width={24} height={24} alt="이미지 업로드" />
              </p>
            </div>
          </div>

          <div className={createBox}>
            <label className={inputLabel}>제목</label>
            <input className={inputStyle} name="title" value={title}/>
          </div>

          <div className={createBox} style={{ alignItems: "flex-start" }}>
            <label className={inputLabel}>내용</label>
            <textarea className={textareaStyle} name="content" value={content}/>
          </div>

          <div className={createBox}>
            <label className={inputLabel}>태그</label>
            <input className={inputStyle} name="tags" value={tags}/>
          </div>

          <div className={tagLimitLabel}>태그 갯수 제한 3개</div>
        </div>
      </main>
      <div className={saveWrapper}>
        <button className={saveButton}>임시저장</button>
        <button className={confirmButton}>완료하기</button>
      </div>
    </>
  );
}
