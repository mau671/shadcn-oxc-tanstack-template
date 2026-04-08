import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WorkbenchIndexPage = () => (
  <div className="grid gap-4 md:grid-cols-2">
    <Card>
      <CardHeader>
        <CardTitle>Starter Notes</CardTitle>
        <CardDescription>
          Keep this template minimal. Add features from your app domain first.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Token Notes</CardTitle>
        <CardDescription>
          Short examples showing starter styling and semantic token usage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline">
          <Link to="/workbench/tokens">Open Token Notes</Link>
        </Button>
      </CardContent>
    </Card>
  </div>
);

export const Route = createFileRoute("/workbench/")({
  component: WorkbenchIndexPage,
});
