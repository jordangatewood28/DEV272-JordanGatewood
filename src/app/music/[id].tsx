import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useLocalSearchParams } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useListen } from "@/context/ListenContext"
import { music } from "@/data/music"
import { usePalette } from "@/hooks/usePalette";

export default function MusicDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const c = usePalette();
    const { isListen, toggleListen } = useListen();
    const imusic = music.find((m) => m.id === id);

    if (!music) {
        return(
            <View>
                <Stack.Screen options={{ title: "Not found" }}/>
                <View>
                    <Text>Not found</Text>
                    <Text>No music with ID {id}.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 8},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  row: {
    flexDirection: "row", gap:8, alignItems: "center"
  },
  input: {
    flex: 1, borderWidth: 1, borderColor: "Gray", borderRadius: 8, padding: 10
  },
  button: {
    backgroundColor: "red", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8
  },
  buttonText: {
    color: "white", fontWeight: "600"
  },
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
  cardMain: {flex: 1, gap: 2},
  cardTitle: { fontWeight: "600"},
  cardSub: {color: "gray"},
});
