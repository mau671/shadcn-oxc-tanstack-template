import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { ListItem } from "@tamagui/list-item";
import {
  Button,
  H1,
  Paragraph,
  Separator,
  SizableText,
  Theme,
  YStack,
} from "tamagui";
import { useThemeMode } from "../providers/app-providers";

interface NavItem {
  label: string;
  to: "/" | "/about" | "/workbench";
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Workbench", to: "/workbench" },
];

export const AppShell = () => {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { mode, toggleMode } = useThemeMode();

  return (
    <Theme name={mode}>
      <YStack gap="$5">
        <YStack gap="$2">
          <SizableText color="$accent10" size="$2">
            tamagui-oxc-tanstack-template
          </SizableText>
          <H1 size="$8">Modern React web starter</H1>
          <Paragraph size="$5" color="$gray11">
            React + Vite + TanStack Router/Query + Tamagui + Oxc.
          </Paragraph>
          <YStack>
            <Button
              onPress={toggleMode}
              size="$4"
              theme={mode === "dark" ? "blue" : "gray"}
            >
              Switch to {mode === "dark" ? "light" : "dark"}
            </Button>
          </YStack>
        </YStack>

        <Separator />

        <YStack gap="$2">
          {navItems.map((item) => {
            const isActive =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);

            return (
              <ListItem
                key={item.to}
                onPress={() => {
                  void navigate({ to: item.to });
                }}
                size="$4"
                subTitle={isActive ? "Current route" : "Navigate"}
                theme={isActive ? "blue" : undefined}
                title={item.label}
                variant="outlined"
              />
            );
          })}
        </YStack>

        <Separator />
        <Outlet />
      </YStack>
    </Theme>
  );
};
