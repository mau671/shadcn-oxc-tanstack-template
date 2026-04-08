import { Link, createFileRoute } from "@tanstack/react-router";
import { Button, Paragraph, YStack } from "tamagui";

const WorkbenchIndexPage = () => (
  <YStack gap="$3">
    <Paragraph size="$5" color="$gray11">
      Nested index routes map to the exact parent path. This page renders at
      `/workbench`.
    </Paragraph>
    <YStack>
      <Button asChild size="$4" theme="blue">
        <Link to="/workbench/tokens">Open the token notes page</Link>
      </Button>
    </YStack>
  </YStack>
);

export const Route = createFileRoute("/workbench/")({
  component: WorkbenchIndexPage,
});
