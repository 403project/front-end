import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const HeaderContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  color: vars.neutral[90],
  margin: "0 auto",
  marginTop: "50px",
  fontSize: "28px",
  fontFamily: "Pretendard",
});

export const LogoContainer = style({
  display: "flex",
  alignItems: "center",
});

export const LogoSpan = style({
  fontSize: "16px",
  marginLeft: "6px",
  color: vars.primary[100],
  fontWeight: "700",
});

export const Progress = style({
  marginTop: "36px",
  width: "100%",
  height: "2px",
  backgroundColor: vars.strokeLine[10],
});

export const LoginBar = style({
  height: "2px",
  transition: "width 0.5s",
  backgroundColor: vars.strokeLine[0],
});

export const HeaderTitle = style({
  margin: "36px 0",
  fontSize: "28px",
  fontWeight: "500",
  fontFamily: "Pretendard",
});
