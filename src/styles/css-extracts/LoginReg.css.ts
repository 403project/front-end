import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

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
  color: vars.neutral[80],
  marginRight: "12px",
});

export const GotoReg = style({
  color: vars.primary[100],
  cursor: "pointer",
});

export const SeperatorContainer = style({
  marginTop: "36px",
  display: "flex",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "18px",
  color: vars.neutral[40],
  position: "relative",
});

export const LeftSeperatorLine = style({
  position: "absolute",
  left: "54%",
  right: 0,
  top: "50%",
  borderBottom: `1px solid ${vars.strokeLine[10]}`,
  content: "''",
});

export const RightSeperatorLine = style({
  position: "absolute",
  left: 0,
  right: "54%",
  top: "50%",
  borderBottom: `1px solid ${vars.strokeLine[10]}`,
  content: "''",
});

export const SocialImageContainer = style({
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  cursor: "pointer",
});
