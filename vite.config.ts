import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

const repoName = "shadcn-oxc-tanstack-template";
const isGitHubPagesBuild = process.env.VITE_DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  base: isGitHubPagesBuild ? `/${repoName}/` : "/",
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      generatedRouteTree: "./src/routeTree.gen.ts",
      routeFileIgnorePattern: "\\.(test|spec)\\.(ts|tsx)$",
      routesDirectory: "./src/routes",
      target: "react",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
