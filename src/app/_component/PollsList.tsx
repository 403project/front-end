"use client";
import React from "react";
import useGetPolls from "../hooks/useGetPolls";

type Props = {};

const PollsList = (props: Props) => {
  const {} = useGetPolls();
  return <div>PollsList</div>;
};

export default PollsList;
