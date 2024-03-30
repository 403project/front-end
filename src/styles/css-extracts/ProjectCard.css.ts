import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const ProjectsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

export const ProjectBox = style({
  display: "flex",
  alignItems: "center",
  padding: "20px 20.5px",
  width: "100%",
  maxWidth: 700,
  justifyContent: "space-between",
});

export const ProjectVoteButtonContainer = style({
  height: "90px",
  display: "flex",
  alignItems: "flex-end",
});

export const ProjectMoreButton = style({
  width: 224,
  height: 52,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});
export const ProjectMoreButtonRightArrow = style({
  position: "absolute",
  right: 5,
  height: 52,
  top: 0,
});

export const ProjectVoteButton = style({
  backgroundColor: vars.primary["100"],
  color: vars.neutral["0"],
  fontFamily: "Pretendard",
  ...vars.content.medium14,
  borderRadius: "6px",
  padding: "10px 16px",
});

export const ProjectDate = style({
  width: "fit-content",
  color: vars.neutral[30],
  ...vars.content.bold14,
  fontFamily: "Pretendard",
  fontWeight: "600",
});

export const ProjectPrimaryBadge = style({
  backgroundColor: vars.primary["10"],
  color: vars.primary[100],
});

export const ProjectNormalBadge = style({
  backgroundColor: vars.neutral["5"],
  color: vars.neutral[40],
});

export const ProjectBadge = style({
  width: "fit-content",
  borderRadius: 6,
  padding: "6px 12px",
  ...vars.content.bold14,
  fontFamily: "Pretendard",
  fontWeight: "600",
});

export const ProjectContentContainer = style({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Pretendard",
  gap: 16,
  height: "100%",
});

export const ProjectTextTitle = style({
  color: vars.neutral[90],
  ...vars.title.h5,
  fontFamily: "Pretendard",
});

export const ProjectContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 26,
});

export const ProjectBorder = style({
  border: "1px solid",
  borderRadius: 6,
  borderColor: vars.strokeLine[10],
});

export const ProjectImage = style({
  width: "118px",
  height: "118px",
  borderRadius: 10,
  padding: 8,
  background: vars.primary[10],
});
