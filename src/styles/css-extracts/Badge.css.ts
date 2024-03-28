import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const badgeContainer = style({
  borderRadius: 50,
  padding: "6px 12px",
  background: vars.primary[10],
  color: vars.primary[100],
  display: "flex",
});
