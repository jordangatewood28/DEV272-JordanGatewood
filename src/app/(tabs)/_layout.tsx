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
                        <Ionicons iname="musical-notes-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="listen-list"
                options={{
                    title: "Listen List",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons iname="headset-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="platforms"
                options={{
                    title: "Platforms",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons iname="play-circle-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}