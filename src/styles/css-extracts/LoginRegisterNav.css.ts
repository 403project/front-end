import { style } from "@vanilla-extract/css";
import { neutral, primary, strokeLine } from "../variants/token";

export const HeaderContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  color: neutral[90],
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
  color: primary[100],
  fontWeight: "700",
});

export const Progress = style({
  marginTop: "36px",
  width: "100%",
  height: "2px",
  backgroundColor: strokeLine[10],
});

export const LoginBar = style({
  height: "2px",
  transition: "width 0.5s",
  backgroundColor: strokeLine[0],
});

export const HeaderTitle = style({
  margin: "36px 0",
  fontSize: "28px",
  fontWeight: "500",
  fontFamily: "Pretendard",
});
