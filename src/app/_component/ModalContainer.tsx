import React from "react";

import { Container } from "@/styles/css-extracts/Modal.css";

interface Props {
  children: React.ReactNode;
  handleCloseModal?: () => void;
}

export default function ModalContainer({ children, handleCloseModal }: Props) {
  const closeModalHandler = handleCloseModal || (() => {});

  return (
    <div onClick={closeModalHandler} className={Container}>
      {children}
    </div>
  );
}
