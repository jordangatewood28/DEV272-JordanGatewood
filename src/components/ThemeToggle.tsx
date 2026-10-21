import { colors } from "@/app/constants/colors";
import { Appearance, Pressable, StyleSheet, Text, useColorScheme } from "react-native";

export default function Toggle() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";
    const c = colors[isDark ? "dark" : "light"];

    return(
        <Pressable
            onPress={() => Appearance.setColorScheme?.(isDark? "light" : "dark")}
            onLongPress={() => Appearance.setColorScheme?.("unspecified")}
            hitSlop={8}
            accessibilityRole="switch"
            accessibilityLabel="Dark mode"
            accessibilityState={{checked: isDark}}
            style={({pressed}) => [
                styles.toggle,
                {backgroundColor: c.text, opacity: pressed ? 0.7  : 1},
            ]}
        >
            <Text style={[styles.label, { color: c.card}]}>
                {isDark ? "Light" : "Dark"}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    toggle: {
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: "white",
    },
    toggleOn: {backgroundColor: "blue"},
    label: {fontWeight: "600", color:"gray"},
    labelOn: {color: "white"}
});