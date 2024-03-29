import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

const rankingContainer = style({
  borderRadius: 8,
  overflow: "hidden",
});

const rankingTopWrapper = style({
  backgroundColor: vars.primary[100],
  padding: "30px 40px",
});

const rankingHeaderBox = style({
  display: "flex",
  justifyContent: "space-between",
});

const headerTitle = style({
  ...vars.title.h5,
  color: vars.neutral[0],
});

const headerSubTitle = style({
  ...vars.content.regular14,
  color: vars.neutral[0],
  marginTop: 9,
});

const headerLine = style({
  borderBottom: `1px solid ${vars.primary[60]}`,
  marginTop: 20,
  marginBottom: 20,
});

const headerRankingBox = style({
  display: "flex",
  gap: 30,
});

const rankingBottomWrapper = style({
  padding: "18px 34px",
  borderLeft: `1px solid ${vars.strokeLine[5]}`,
  borderRight: `1px solid ${vars.strokeLine[5]}`,
  borderBottom: `1px solid ${vars.strokeLine[5]}`,
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
});

const rankingCard = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 6,
});

const rankingCardLeft = style({
  display: "flex",
  alignItems: "center",
});

const leftCount = style({
  color: vars.neutral[30],
  ...vars.content.regular14,
  marginRight: 18,
});

const leftTitle = style({
  color: vars.neutral[90],
  ...vars.content.regular14,
  marginLeft: 13,
});

const rankingCardTotalCount = style({
  color: vars.neutral[60],
  ...vars.content.regular14,
});

export {
  rankingContainer,
  rankingTopWrapper,
  rankingBottomWrapper,
  rankingHeaderBox,
  headerTitle,
  headerSubTitle,
  headerRankingBox,
  headerLine,
  rankingCard,
  rankingCardLeft,
  leftCount,
  leftTitle,
  rankingCardTotalCount,
};
