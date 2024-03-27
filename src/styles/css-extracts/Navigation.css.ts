import { style } from "@vanilla-extract/css";
import { primary, title, fontFamily, content, strokeLine } from "../variants/token";

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
  borderColor: strokeLine["10"],
});

export const LogoTitle = style({
  color: primary[90],
  fontSize: content["medium16"]["fontSize"],
  fontWeight: content["medium16"]["fontWeight"],
  fontFamily: fontFamily,
});
