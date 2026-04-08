import { QueryClient, queryOptions } from "@tanstack/react-query";

export interface ShowcaseMetric {
  value: string;
  label: string;
  detail: string;
}

const readShowcaseMetrics = (): Promise<ShowcaseMetric[]> =>
  Promise.resolve([
    {
      detail: "TanStack Router preloads route chunks on intent.",
      label: "Bundler",
      value: "Vite + code splitting",
    },
    {
      detail: "The provider is wired for production CSS extraction.",
      label: "UI runtime",
      value: "Tamagui compiler-ready",
    },
    {
      detail: "Fast linting, formatting, and strict TypeScript checks.",
      label: "Tooling",
      value: "Oxlint + Oxfmt",
    },
  ]);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  },
});

export const showcaseMetricsQueryOptions = queryOptions({
  queryFn: readShowcaseMetrics,
  queryKey: ["showcase-metrics"],
});
