import { createHashHistory, createRouter } from "@tanstack/react-router";
import { queryClient } from "./lib/query";
import { routeTree } from "./routeTree.gen";

const useHashHistory = import.meta.env.PROD && import.meta.env.BASE_URL !== "/";

export const router = createRouter({
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  history: useHashHistory ? createHashHistory() : undefined,
  routeTree,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
