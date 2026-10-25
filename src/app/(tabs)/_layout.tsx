import ThemeToggle from "@/components/ThemeToggle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ headerRight:() => <ThemeToggle/>}} >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Music",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons iname="music-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Music",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons iname="star-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="platforms"
                options={{
                    title: "Platforms",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons iname="circle-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}