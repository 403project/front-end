"use client";
import {
  voteCardBox,
  voteContainer,
  voteTitle,
  voteWrapper,
  rankingBox,
  voteSelect,
} from "@/styles/css-extracts/VotePage.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import VoteCard from "./_component/VoteCatd";
import Ranking from "./_component/Ranking";
import Navigation from "../_component/Navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import loading from "../../../public/loading.svg";
import Image from "next/image";
import Link from "next/link";
import { FooterContainer } from "@/styles/css-extracts/Main.css";
import logowithtext from "../../../public/logowithtext.svg";

export type Project = {
  id: number;
  title: string;
  description: string;
  voteCount: number;
  imageUrls: string[];
  tags?: string[];
};

export default function Vote() {
  const [lists, setLists] = useState<{ id: number }[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const searchParams = useSearchParams();

  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const voteCardRefs = useRef<any>([]);
  const title = searchParams.get("title");

  useEffect(() => {
    axios
      .get(`https://api.byulbyul.store/polls/${searchParams.get("pollid")}`)
      .then((res) => {
        const { projects } = res.data;
        setLists(projects);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    Promise.all(lists.map(({ id }) => axios.get(`https://api.byulbyul.store/projects/${id}`))).then((res) => {
      setProjects(res.map(({ data }) => data));
    });
  }, [lists]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const activeRef = voteCardRefs.current[activeCardIndex] as any;
      if (activeRef && !activeRef.contains(event.target)) {
        setActiveCardIndex(-1); // Close the active card if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCardIndex]);
  return (
    <>
      <Navigation />
      <main className={voteContainer}>
        <div className={voteTitle}>{`${title}`}</div>
        <div>
          {/* <select className={voteSelect}>
            <option defaultChecked>전체</option>
            <option>등록일 순</option>
            <option>가나다 순</option>
            <option>조회수 높은 순</option>
            <option>조회수 낮은 순</option>
          </select> */}
          <div className={voteWrapper}>
            <div>
              {lists.length > 0 ? (
                <div className={voteCardBox}>
                  {projects.map((project, index) => {
                    return (
                      <Link key={project.id} href={`vote/${project.id}`}>
                        <VoteCard
                          key={index}
                          ref={(el: any) => (voteCardRefs.current[index] = el)}
                          isActive={index === activeCardIndex}
                          // onMoreClick={(e: any) => {
                          //   e.stopPropagation();
                          //   setActiveCardIndex(index === activeCardIndex ? -1 : index);
                          // }}
                          setActiveCardIndex={setActiveCardIndex}
                          list={project}
                        />
                      </Link>
                    );
                  })}
                </div>
              ) : (
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
                  <div style={{ fontWeight: "bold", fontSize: 24, fontFamily: "Pretendard" }}>
                    조금만 기다려주세요...
                  </div>
                </div>
              )}
            </div>
            <div className={rankingBox}>
              <Ranking />
            </div>
          </div>
        </div>
      </main>
      <footer className={FooterContainer}>
        <Image src={logowithtext} width={100} height={24} alt="logo" />
      </footer>
    </>
  );
}
