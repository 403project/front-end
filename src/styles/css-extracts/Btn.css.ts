import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const LoginBtn = style({
  position: "absolute",
  width: "calc(100% - 40px)",
  height: "52px",
  backgroundColor: vars.primary[30],
  borderRadius: "8px",
  fontFamily: "Pretendard",
  color: vars.neutral.white,
});
