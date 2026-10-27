import { MusicType } from "@/data/music";
import { usePalette } from "@/hooks/usePalette";
import { useRouter } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export function MusicRow({music}: {music: MusicType}) {
    const c = usePalette();
    const router = useRouter();
    return(
        <Pressable
            onPress={() => 
                router.push({
                    pathname: "/music/[id]",
                    params: { id: music.id },
                })
            }
            style={({ pressed }) => [
                styles.card, 
                {backgroundColor: c.card, borderColor: c.cardBorder}, 
                pressed && styles.pressed,
            ]}
        >
            <View style={styles.cardMain}>
                <Text style={[styles.cardTitle, {color: c.text}]}>
                    {music.name}
                </Text>
                <Text style={{color: c.muted}}>
                    {music.artist}
                </Text>
            </View>
            <Text style={{color: c.muted}}>
                {music.album}, {music.id}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
      card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2},
      },
      android: {elevation: 2},
    })
  },
  pressed: {opacity: 0.7},
  cardMain: {flex: 1, gap: 2},
  cardTitle: { fontWeight: "600"},
  cardSub: {color: "gray"},
});