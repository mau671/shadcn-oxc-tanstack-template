import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Outlet,
  createRootRouteWithContext,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

interface RouterContext {
  queryClient: QueryClient;
}

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Workbench", to: "/workbench" as const },
];

const RootLayout = () => {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>React + Vite + TanStack + shadcn/ui</CardTitle>
          <CardDescription>
            Starter template with file-based routing, TanStack Query, and Oxc
            checks.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);

            return (
              <Button
                key={item.to}
                onClick={() => {
                  void navigate({ to: item.to });
                }}
                variant={isActive ? "default" : "outline"}
              >
                {item.label}
              </Button>
            );
          })}
          <ModeToggle />
        </CardContent>
      </Card>

      <Separator />
      <Outlet />
    </div>
  );
};

const RootComponent = () => (
  <>
    <RootLayout />
    {import.meta.env.DEV ? (
      <>
        <TanStackRouterDevtools position="bottom-left" />
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    ) : null}
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
