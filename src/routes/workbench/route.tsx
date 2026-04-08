import { Outlet, createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WorkbenchLayout = () => (
  <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Workbench</CardTitle>
        <CardDescription>
          Starter demos for the TanStack stack used in this template.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Choose one demo below. Route directory:{" "}
        <code>src/routes/workbench/*</code>
      </CardContent>
    </Card>
    <Outlet />
  </div>
);

export const Route = createFileRoute("/workbench")({
  component: WorkbenchLayout,
});
