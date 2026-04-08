import type { TamaguiBuildOptions } from "tamagui";

export default {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  disableExtraction: process.env.NODE_ENV === "development",
  outputCSS: "./src/tamagui.css",
} satisfies TamaguiBuildOptions;
