import { createFileRoute } from "@tanstack/react-router";
import { ListItem } from "@tamagui/list-item";
import { H2, Paragraph, YStack } from "tamagui";

const AboutPage = () => (
  <YStack gap="$4">
    <H2 size="$8">A web-first baseline with modern tooling</H2>
    <Paragraph size="$5" color="$gray11">
      Vite keeps the developer loop fast, TanStack Router brings typed route
      generation, and TanStack Query handles async state cleanly.
    </Paragraph>

    <YStack gap="$2">
      <ListItem
        title="Type safety"
        subTitle="TypeScript stays as source of truth with tsc -b."
        variant="outlined"
      />
      <ListItem
        title="UI"
        subTitle="The template uses official Tamagui components directly."
        variant="outlined"
      />
    </YStack>
  </YStack>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
