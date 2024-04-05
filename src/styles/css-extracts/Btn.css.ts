import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const LoginBtn = style({
  position: "absolute",
  width: "calc(100% - 40px)",
  height: "52px",
  top: "650px",
  backgroundColor: vars.primary[30],
  borderRadius: "8px",
  fontFamily: "Pretendard",
  color: vars.neutral[0],
  cursor: "default",
});

export const SuccessBtn = style({
  backgroundColor: vars.primary[100],
  cursor: "pointer",
});
