import { badgeContainer } from "@/styles/css-extracts/Badge.css";
import { PropsWithChildren } from "react";

const Badge = ({ children }: PropsWithChildren) => {
  return <div className={badgeContainer}>{children}</div>;
};

export default Badge;
