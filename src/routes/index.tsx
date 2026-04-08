import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { ListItem } from "@tamagui/list-item";
import { Button, H2, Paragraph, YStack } from "tamagui";
import { showcaseMetricsQueryOptions } from "../lib/query";
import { SimpleAccordion } from "../ui/simple-accordion";

const HomePage = () => {
  const { data } = useSuspenseQuery(showcaseMetricsQueryOptions);

  return (
    <YStack gap="$5">
      <YStack gap="$3">
        <H2 size="$8">Fast setup, clean defaults</H2>
        <Paragraph size="$5" color="$gray11">
          File-based routing, query caching, official Tamagui components, and
          direct Oxc checks.
        </Paragraph>
        <YStack gap="$2">
          <Button size="$4" theme="blue">
            pnpm dev
          </Button>
          <Button size="$4">pnpm check</Button>
        </YStack>
      </YStack>

      <YStack gap="$2">
        <ListItem
          title="Directory routing"
          subTitle="src/routes/workbench/route.tsx owns nested pages."
          variant="outlined"
        />
        <ListItem
          title="Tooling"
          subTitle="oxfmt + oxlint + tsc keep feedback clear in CI."
          variant="outlined"
        />
      </YStack>

      <SimpleAccordion
        items={data.map((metric) => ({
          body: metric.detail,
          title: metric.label,
          value: metric.value,
        }))}
      />
    </YStack>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(showcaseMetricsQueryOptions),
});
