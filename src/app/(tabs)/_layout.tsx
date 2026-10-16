import ThemeToggle from "@/components/ThemeToggle";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ headerRight: () => <ThemeToggle />}} >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Musics",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="restaurant-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
};