import { style } from "@vanilla-extract/css";
import { neutral, primary, strokeLine } from "../variants/token";

export const LoginRegContainer = style({
  position: "relative",
  maxWidth: "460px",
  margin: "0 auto",
  padding: "0 20px",
});

export const SignupContainer = style({
  marginTop: "26px",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "18px",
});

export const SignupAsk = style({
  color: neutral[60],
  marginRight: "12px",
});

export const GotoReg = style({
  color: primary[100],
  cursor: "pointer",
});

export const SeperatorContainer = style({
  marginTop: "36px",
  display: "flex",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "18px",
  color: neutral[40],
  position: "relative",
});

export const LeftSeperatorLine = style({
  position: "absolute",
  left: "54%",
  right: 0,
  top: "50%",
  borderBottom: `1px solid ${strokeLine[10]}`,
  content: "''",
});

export const RightSeperatorLine = style({
  position: "absolute",
  left: 0,
  right: "54%",
  top: "50%",
  borderBottom: `1px solid ${strokeLine[10]}`,
  content: "''",
});

export const SocialImageContainer = style({
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  cursor: "pointer",
});
