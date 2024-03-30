import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

const voteCreateContainer = style({
  marginTop: 129,
  padding: "0 140px",
  "@media": {
    "screen and (max-width: 1200px)": {
      padding: "0 30px",
      marginTop: 155,
    },
  },
});

const voteCreateTitle = style({
  ...vars.title.h3,
});

const voteCreateWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 295px",
  "@media": {
    "screen and (max-width: 1200px)": {
      padding: "0",
    },
  },
});

const createBox = style({
  display: "flex",
  alignItems: "center",
  marginBottom: 24,
  width: "100%",
});

const inputLabel = style({
  flex: 1,
});

const inputStyle = style({
  width: "calc(100% - 80px)",
  height: "52px",
  border: `1px solid ${vars.strokeLine[10]}`,
  padding: "14px",
  fontFamily: "Pretendard",
  borderRadius: "6px",
});

const textareaStyle = style({
  resize: "none",
  width: "calc(100% - 80px)",
  height: "300px",
  border: `1px solid ${vars.strokeLine[10]}`,
  padding: "14px",
  fontFamily: "Pretendard",
  borderRadius: "6px",
});

const voteFileWrapper = style({
  marginTop: 44,
  border: `1px solid ${vars.neutral[10]}`,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "72px 260px",
  maxWidth: 520,
  "@media": {
    "screen and (max-width: 1200px)": {
      padding: "50px 150px",
    },
  },
});

const tagLimitLabel = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  color: vars.neutral[50],
  marginTop: 9,
  marginBottom: 120,
  "@media": {
    "screen and (max-width: 1200px)": {
      marginBottom: 150,
    },
  },
});

const saveWrapper = style({
  position: "fixed",
  bottom: 0,
  width: "100%",
  padding: "18px 180px",
  display: "flex",
  backgroundColor: vars.primary[10],
  justifyContent: "flex-end",
  "@media": {
    "screen and (max-width: 1200px)": {
      padding: "18px 30px",
    },
  },
});

const confirmButton = style({
  backgroundColor: vars.primary[100],
  borderRadius: 10,
  padding: "16px 32px",
  color: vars.neutral[0],
  marginLeft: 8,
});

const saveButton = style({
  border: `1px solid ${vars.strokeLine[10]}`,
  borderRadius: 10,
  backgroundColor: vars.neutral[0],
  padding: "16px 32px",
});

export {
  voteCreateContainer,
  voteCreateTitle,
  voteFileWrapper,
  voteCreateWrapper,
  createBox,
  inputStyle,
  inputLabel,
  textareaStyle,
  tagLimitLabel,
  saveWrapper,
  confirmButton,
  saveButton,
};
