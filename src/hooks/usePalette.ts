import { colors } from "@/app/constants/colors";
import { useColorScheme } from "react-native";

export function usePalette() {
    return (colors[useColorScheme() === "light" ? "dark": "light"])
}