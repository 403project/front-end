import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const LoginRegContainer = style({
  position: "relative",
  maxWidth: "460px",
  margin: "0 auto",
  padding: "0 20px",
  fontFamily: "Pretendard",
});

export const SubTitle = style({
  fontSize: "14px",
  marginTop: "-14px",
  fontWeight: "400",
  lineHeight: "18px",
});

export const GenderContainer = style({
  marginTop: "16px",
});

export const RegGender = style({
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "18px",
  color: vars.neutral[90],
});

export const GenderChoiceContainer = style({
  marginTop: "15px",
  display: "flex",
  gap: "12px",
});

export const GenderBtn = style({
  width: "224px",
  height: "52px",
  color: vars.neutral[0],
  borderRadius: "8px",
  backgroundColor: vars.primary[30],
});

export const BirthContainer = style({
  marginTop: "25px",
  color: vars.neutral[90],
  fontSize: "14px",
  fontWeight: "700",
});

export const SignupContainer = style({
  marginTop: "26px",
  display: "flex",
  justifyContent: "center",
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
  content: "",
});

export const RightSeperatorLine = style({
  position: "absolute",
  left: 0,
  right: "54%",
  top: "50%",
  borderBottom: `1px solid ${vars.strokeLine[10]}`,
  content: "",
});

export const SocialImageContainer = style({
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  cursor: "pointer",
});

export const JoinFieldContainer = style({});

export const FieldType = style({
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "18px",
  color: vars.neutral[90],
});

export const DropdownContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  maxWidth: "450px",
  margin: "20px 0",
});

export const DropdownBox = style({
  width: "100%",
  height: "52px",
  padding: "0 14px",
  fontSize: "14px",
  fontWeight: "500",
  borderRadius: "6px",
  backgroundColor: vars.neutral[0],
  border: `1px solid ${vars.neutral[10]}`,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const DropdownSpan = style({
  color: vars.neutral[60],
});

export const ArrowImg = style({
  position: "absolute",
  right: "14px",
});

export const DropDownOptionContainer = style({
  top: "100%",
  position: "absolute",
  width: "100%",
  borderRadius: "6px",
  border: `1px solid ${vars.neutral[10]}`,
  backgroundColor: vars.neutral[0],
  zIndex: "999",
  maxHeight: "156px",
  overflowY: "auto",
});

export const DropDownOption = style({
  padding: "0 14px",
  height: "52px",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
