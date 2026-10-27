import { ListenProvider } from "@/context/ListenContext";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

// Root layout. Every screen file inside src/app/ is a route.
// Week 3 replaces this with Stack + Tabs layouts.
export default function RootLayout() {
  const scheme = useColorScheme();
  return (
    <ThemeProvider value={scheme === "light" ? DarkTheme : DefaultTheme}>
      <ListenProvider>
      <StatusBar style="auto"/>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            // title: "Music List",
            // headerRight: () => <ThemeToggle />,
            // headerBackButtonDisplayMode: "default",
          }}
        />
      </Stack>
      </ListenProvider>
    </ThemeProvider>
  );
}
