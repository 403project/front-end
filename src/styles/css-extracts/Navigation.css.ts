import { style } from "@vanilla-extract/css";
import { primary, title, fontFamily, content, strokeLine } from "../variants/token";
import { vars } from "../variants/variants.css";

export const LogoContainer = style({
  display: "flex",
  alignItems: "center",
});

export const Naviation = style({
  display: "flex",
  padding: "16px 24px",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: vars.strokeLine["10"],
  position: "fixed",
  backdropFilter: "blur(5px)",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#ffffff59",
  zIndex: 100,
  justifyContent: "space-between",
});

export const LogoTitle = style({
  color: vars.primary[90],
  ...content.medium16,
  fontFamily: fontFamily,
  marginLeft: 6,
});

export const NavigationGroups = style({
  display: "flex",
  gap: "20px",
  marginLeft: 76,
  color: vars.neutral["90"],
  ...content.regular16,
  fontFamily: "Pretendard",
});

export const NavigationRightGroups = style({
  display: "flex",
  gap: "20px",
  color: vars.neutral["90"],
  ...content.regular16,
  alignItems: "center",
  fontFamily: "Pretendard",
});

export const NavigationButton = style({
  padding: "14px 12px",
  border: "1px solid",
  color: vars.neutral["90"],
  ...content.regular14,
  borderColor: vars.strokeLine["10"],
  borderRadius: 6,
});

export const NaviationPrimary = style({
  backgroundColor: vars.primary["100"],
  color: vars.neutral["0"],
  border: "0px",
});
