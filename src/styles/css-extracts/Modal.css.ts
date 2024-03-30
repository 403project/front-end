import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const Container = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  zIndex: "10",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
});

export const ModalBox = style({
  width: "384px",
  height: "480px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${vars.primary[30]}`,
  backgroundColor: "white",
});

export const ModalGreet = style({
  marginTop: "48px",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "34px",
});

export const ModalSubTitle = style({
  margin: "17px 0 23px 0",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "24px",
  color: "#6590FE",
});

export const ModalBtn = style({
  marginTop: "48px",
  width: "calc(100% - 44px)",
  height: "52px",
  backgroundColor: "#3E74FE",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "700",
  color: "#ffffff",
});
