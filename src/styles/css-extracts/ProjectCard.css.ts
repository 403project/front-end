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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: vars.primary["100"],
  color: vars.neutral["0"],
  fontFamily: "Pretendard",
  ...vars.content.medium14,
  borderRadius: "6px",
  padding: "10px 16px",
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "100%",
      padding: "8px 12px",
      ...vars.content.medium12,
    },
  },
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
  "@media": {
    "screen and (max-width: 1200px)": {
      ...vars.content.medium12,
      fontSize: 10,
      padding: "8px 12px",
    },
  },
});

export const ProjectDate = style({
  width: "fit-content",
  color: vars.neutral[30],
  ...vars.content.bold14,
  fontFamily: "Pretendard",
  fontWeight: "600",
  "@media": {
    "screen and (max-width: 1200px)": {
      ...vars.content.medium12,
      fontSize: 10,
    },
  },
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
  "@media": {
    "screen and (max-width: 1200px)": {
      ...vars.content.medium12,
    },
  },
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
  "@media": {
    "screen and (max-width: 1200px)": {
      ...vars.content.bold16,
    },
  },
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

export const ProjectImageContainer = style({
  width: "118px",
  height: "118px",
  borderRadius: 10,
  padding: 8,
  background: vars.primary[10],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "80px",
      height: "80px",
    },
  },
});

export const ProjectImage = style({
  width: "100px",
  height: "100px",
  borderRadius: 10,
  padding: 8,
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "70px",
      height: "70px",
    },
  },
});
