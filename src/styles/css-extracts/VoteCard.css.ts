import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const voteCardContainer = style({
  border: `1px solid ${vars.strokeLine[10]}`,
  borderRadius: 10,
  padding: 14,
  maxWidth: 340,
});

export const voteCardHeader = style({
  display: "flex",
  position: "relative",
});

export const voteImage = style({
  borderRadius: 10,
  width: "100%",
});

export const voteBadge = style({
  borderRadius: 6,
  padding: "6px 12px",
  color: vars.primary[100],
  backgroundColor: vars.primary[10],
  position: "absolute",
  top: 10,
  left: 10,
});

export const voteSetting = style({
  display: "flex",
  position: "absolute",
  top: 10,
  right: 10,
});

export const voteSettingButton = style({
  padding: 10,
  backgroundColor: vars.neutral[10],
  borderRadius: 50,
});

export const voteCardContent = style({
  marginTop: 21.9,
});

export const voteCardTitle = style({
  ...vars.content.medium18,
});

export const voteCardDescription = style({
  ...vars.content.medium16,
  color: vars.neutral[50],
  marginTop: 12,
});

export const voteCardFooter = style({
  display: "flex",
  marginTop: 23,
  flexWrap: "wrap",
  gap: 4,
});
