import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>A web-first baseline with modern tooling</CardTitle>
      <CardDescription>
        Vite keeps the loop fast, TanStack Router gives typed routes, and
        TanStack Query handles async state.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2 text-sm text-muted-foreground">
      <p>TypeScript remains the source of truth via `tsc -b`.</p>
      <p>
        UI components come from shadcn/ui CLI, not hand-rolled component files.
      </p>
    </CardContent>
  </Card>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
