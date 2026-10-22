import ThemeToggle from "@/components/ThemeToggle";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ headerRight:() => <ThemeToggle/>}} >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Music",
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Music",
                }}
            />
            <Tabs.Screen
                name="platforms"
                options={{
                    title: "Music",
                }}
            />
        </Tabs>
    )
}