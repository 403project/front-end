import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const voteCardContainer = style({
  border: `1px solid ${vars.strokeLine[10]}`,
  borderRadius: 10,
  padding: 14,
  maxWidth: 340,
  position: "relative",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  backgroundColor: vars.neutral[10],
  borderRadius: 50,
  cursor: "pointer",
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

export const voteCardMore = style({
  position: "absolute",
  top: -60,
  right: -25,
  backgroundColor: vars.neutral[0],
  borderRadius: 10,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

export const voteCardMoreButton = style({
  padding: "10px 20px",
  color: vars.neutral[50],
  cursor: "pointer",
});
