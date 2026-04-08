import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { showcaseMetricsQueryOptions } from "@/lib/query";

const HomePage = () => {
  const { data } = useSuspenseQuery(showcaseMetricsQueryOptions);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fast setup, clean defaults</CardTitle>
          <CardDescription>
            File-based routing, query caching, shadcn/ui components, and direct
            Oxc checks.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button>pnpm dev</Button>
          <Button variant="outline">pnpm check</Button>
          <Button asChild variant="secondary">
            <Link to="/workbench">Open demo workbench</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What is already wired</CardTitle>
          <CardDescription>Stack overview for this template.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            {data.map((metric) => (
              <AccordionItem key={metric.label} value={metric.label}>
                <AccordionTrigger>
                  {metric.label}: {metric.value}
                </AccordionTrigger>
                <AccordionContent>{metric.detail}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(showcaseMetricsQueryOptions),
});
