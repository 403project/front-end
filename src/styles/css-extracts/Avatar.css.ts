import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

const AvatarContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const AvatarBox = style({
  position: "relative",
  borderRadius: 50,
});

const AvatarCount = style({
  position: "absolute",
  top: -5,
  left: -5,
  backgroundColor: "#E7BA86",
  textAlign: "center",
  padding: "5px 10px",
  borderRadius: 50,
  color: vars.neutral[0],
});

const AvatarImgBox = style({
  maxWidth: 100,
  maxHeight: 100,
});

const AvatarImg = style({
  borderRadius: 50,
});

const AvartarTitle = style({
  marginTop: 12.58,
  ...vars.content.medium16,
  color: vars.neutral[0],
});

const AvatarTotalCount = style({
  marginTop: 10,
  color: vars.neutral[0],
  backgroundColor: vars.primary[60],
  padding: "6px 16px",
  borderRadius: 50,
});

export { AvatarContainer, AvatarBox, AvatarCount, AvatarImgBox, AvatarImg, AvartarTitle, AvatarTotalCount };
