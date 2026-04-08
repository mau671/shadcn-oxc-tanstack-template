import { createFileRoute } from "@tanstack/react-router";
import { H2, YStack } from "tamagui";
import { SimpleAccordion } from "../../ui/simple-accordion";

const TokenNotesPage = () => (
  <YStack gap="$4">
    <H2 size="$7">Token notes</H2>
    <SimpleAccordion
      items={[
        {
          body: "Use Tamagui space tokens first so layout stays coherent.",
          title: "Spacing",
          value: "Use tokenized spacing",
        },
        {
          body: "Prefer semantic theme colors before hard-coded values.",
          title: "Theme colors",
          value: "Keep semantic color usage",
        },
        {
          body: "Default Tamagui typography scale is enough for most starter UIs.",
          title: "Typography",
          value: "Lean on defaults first",
        },
      ]}
    />
  </YStack>
);

export const Route = createFileRoute("/workbench/tokens")({
  component: TokenNotesPage,
});
