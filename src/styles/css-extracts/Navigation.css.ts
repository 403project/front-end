import { style } from "@vanilla-extract/css";
import { primary, title, fontFamily, content, strokeLine } from "../variants/token";
import { vars } from "../variants/variants.css";

export const LogoContainer = style({
  display: "flex",
  alignItems: "center",
});

export const Naviation = style({
  display: "flex",
  padding: "22px 26px",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: vars.strokeLine["10"],
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: vars.neutral[0],
  zIndex: 100,
});

export const LogoTitle = style({
  color: vars.primary[90],
  ...content.medium16,
  fontFamily: fontFamily,
  marginLeft: 6,
});
