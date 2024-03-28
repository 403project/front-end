import { style } from "@vanilla-extract/css";
import { primary, neutral } from "../variants/token";

export const LoginBtn = style({
  position: "absolute",
  width: "calc(100% - 40px)",
  height: "52px",
  backgroundColor: primary[30],
  borderRadius: "8px",
  fontFamily: "Pretendard",
  color: neutral.white,
});
