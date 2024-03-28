import { style } from "@vanilla-extract/css";
import { primary, title, fontFamily, content, strokeLine } from "../variants/token";
import { vars } from "../variants/variants.css";

export const LogoContainer = style({
  display: "flex",
  gap: 48,
  alignItems: "center",
  height: 42,
});

export const Naviation = style({
  display: "flex",
  padding: "22px 26px",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: vars.strokeLine["10"],
});

export const LogoTitle = style({
  color: vars.primary[90],
  ...vars.content.medium16,
  fontFamily: fontFamily,
});
