import { createTheme } from "@vanilla-extract/css";
import { neutral, strokeLine, primary, system, title, content, fontFamily } from "./token";

export const [themeClass, vars] = createTheme({
  neutral: {
    ...neutral,
  },
  strokeLine: {
    ...strokeLine,
  },
  primary: {
    ...primary,
  },
  system: {
    ...system,
  },
  title: {
    ...title,
  },
  content: {
    ...content,
  },
});

import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  fontFamily,
});
