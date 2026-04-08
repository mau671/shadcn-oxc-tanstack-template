import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppShell } from "../components/app-shell";

interface RouterContext {
  queryClient: QueryClient;
}

const RootComponent = () => (
  <>
    <AppShell />
    {import.meta.env.DEV ? (
      <>
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    ) : null}
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
