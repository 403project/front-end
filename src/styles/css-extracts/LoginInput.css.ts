import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";
import { system } from "../variants/token";

export const LoginRegInput = style({
  margin: "14px 0 26px 0",
  width: "100%",
  height: "52px",
  border: `1px solid ${vars.strokeLine[10]}`,
  padding: "14px",
  fontFamily: "Pretendard",
  borderRadius: "6px",
});

export const EmailInputContainer = style({
  position: "relative",
});

export const NickNameContainer = style({
  position: "relative",
});

export const ImgContainer = style({
  position: "absolute",
  top: "45%",
  right: "100px",
  transform: "translateY(-50%)",
});

export const Duplicate = style({
  cursor: "pointer",
  marginLeft: "16.5px",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "18px",
  color: vars.neutral[40],
  fontFamily: "Pretendard",
  textDecoration: "underline",
});

export const RegEmailNickInput = style({
  margin: "14px 0 26px 0",
  width: "calc(100% - 80px)",
  height: "52px",
  border: `1px solid ${vars.strokeLine[10]}`,
  padding: "14px",
  fontFamily: "Pretendard",
  borderRadius: "6px",
});

export const LoginRegLabel = style({
  fontSize: "14px",
  fontWeight: "700",
  color: vars.neutral[90],
  fontFamily: "Pretendard",
});

export const PasswordInputContainer = style({
  position: "relative",
});

export const ShowPasswordImg = style({
  position: "absolute",
  top: "43.5%",
  right: "10px",
  transform: "translateY(-50%)",
  cursor: "pointer",
});

export const LoginButton = style({
  width: "100%",
  height: "52px",
  borderRadius: "8px",
  backgroundColor: vars.primary[100],
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "700",
  color: vars.neutral[0],
});

export const ErrorMessage = style({
  marginTop: "-12px",
  marginBottom: "12px",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "18px",
  color: system.warning,
});

export const Error = style({
  borderColor: system.warning,
});

export const Focused = style({
  borderColor: vars.primary[100],
});
