import {
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from "@tamagui/colors";
import { createV5Theme, defaultChildrenThemes } from "@tamagui/config/v5";
import { v5ComponentThemes } from "@tamagui/themes/v5";

const darkPalette = [
  "hsla(0, 15%, 1%, 1)",
  "hsla(0, 15%, 6%, 1)",
  "hsla(0, 15%, 12%, 1)",
  "hsla(0, 15%, 17%, 1)",
  "hsla(0, 15%, 23%, 1)",
  "hsla(0, 15%, 28%, 1)",
  "hsla(0, 15%, 34%, 1)",
  "hsla(0, 15%, 39%, 1)",
  "hsla(0, 15%, 45%, 1)",
  "hsla(0, 15%, 50%, 1)",
  "hsla(0, 15%, 93%, 1)",
  "hsla(0, 15%, 99%, 1)",
];

const lightPalette = [
  "hsla(0, 15%, 99%, 1)",
  "hsla(0, 15%, 94%, 1)",
  "hsla(0, 15%, 88%, 1)",
  "hsla(0, 15%, 83%, 1)",
  "hsla(0, 15%, 77%, 1)",
  "hsla(0, 15%, 72%, 1)",
  "hsla(0, 15%, 66%, 1)",
  "hsla(0, 15%, 61%, 1)",
  "hsla(0, 15%, 55%, 1)",
  "hsla(0, 15%, 50%, 1)",
  "hsla(0, 15%, 15%, 1)",
  "hsla(0, 15%, 1%, 1)",
];

const accentLight = {
  accent1: "hsla(20, 63%, 45%, 1)",
  accent10: "hsla(20, 63%, 65%, 1)",
  accent11: "hsla(250, 50%, 95%, 1)",
  accent12: "hsla(250, 50%, 95%, 1)",
  accent2: "hsla(20, 63%, 47%, 1)",
  accent3: "hsla(20, 63%, 49%, 1)",
  accent4: "hsla(20, 63%, 52%, 1)",
  accent5: "hsla(20, 63%, 54%, 1)",
  accent6: "hsla(20, 63%, 56%, 1)",
  accent7: "hsla(20, 63%, 58%, 1)",
  accent8: "hsla(20, 63%, 61%, 1)",
  accent9: "hsla(20, 63%, 63%, 1)",
};

const accentDark = {
  accent1: "hsla(20, 63%, 35%, 1)",
  accent10: "hsla(20, 63%, 60%, 1)",
  accent11: "hsla(250, 50%, 90%, 1)",
  accent12: "hsla(250, 50%, 95%, 1)",
  accent2: "hsla(20, 63%, 38%, 1)",
  accent3: "hsla(20, 63%, 41%, 1)",
  accent4: "hsla(20, 63%, 43%, 1)",
  accent5: "hsla(20, 63%, 46%, 1)",
  accent6: "hsla(20, 63%, 49%, 1)",
  accent7: "hsla(20, 63%, 52%, 1)",
  accent8: "hsla(20, 63%, 54%, 1)",
  accent9: "hsla(20, 63%, 57%, 1)",
};

const builtThemes = createV5Theme({
  accent: {
    dark: accentDark,
    light: accentLight,
  },
  childrenThemes: {
    ...defaultChildrenThemes,
    error: {
      dark: redDark,
      light: red,
    },
    success: {
      dark: greenDark,
      light: green,
    },
    warning: {
      dark: yellowDark,
      light: yellow,
    },
  },
  componentThemes: v5ComponentThemes,
  darkPalette,
  lightPalette,
});

export type Themes = typeof builtThemes;

export const themes: Themes = builtThemes as Themes;
