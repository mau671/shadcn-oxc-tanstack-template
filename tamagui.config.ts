import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui } from "tamagui";
import { themes } from "./themes";

const config = createTamagui({
  ...defaultConfig,
  themes,
});

type AppConfig = typeof config;

declare module "tamagui" {
  // Tamagui reads configuration types through module augmentation.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
