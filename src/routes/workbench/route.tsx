import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ListItem } from "@tamagui/list-item";
import { H2, Paragraph, YStack } from "tamagui";

const WorkbenchLayout = () => (
  <YStack gap="$4">
    <H2 size="$8">Workbench</H2>
    <Paragraph size="$5" color="$gray11">
      This route demonstrates directory-based routing with a parent layout and
      nested children.
    </Paragraph>
    <ListItem
      title="Route directory"
      subTitle="src/routes/workbench/*"
      variant="outlined"
    />
    <Outlet />
  </YStack>
);

export const Route = createFileRoute("/workbench")({
  component: WorkbenchLayout,
});
