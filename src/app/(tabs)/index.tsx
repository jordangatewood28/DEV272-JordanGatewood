import { MusicType, musics } from "@/data/music";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";
import { colors } from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { usePalette } from "@/hooks/usePalette";

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const c = usePalette();
  const q = query.trim().toLowerCase();
  const filtered = musics.filter(
    (m) => m.name.toLowerCase().includes(q)
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={musics}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => <MusicRow music={item}/>}
        ListHeaderComponent={<Header />}
        contentContainerStyle={styles.list}
      />
      <Pressable
        onPress={() => console.log("Don't forget to add a new route")}
        accessibilityRole="button"
        accessibilityLabel="Add music"
        style={({ pressed }) => [
          styles.fab,
          {backgroundColor: c.primary, opacity: pressed ? 0.8 : 1}
        ]}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
    </View>
  );
}

function Header() {
  const [query, setQuery] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music List</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Search music"
          value={query}
          onChangeText={setQuery}
        />
        <Pressable style={styles.button} onPress={() => console.log(query)}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </View>
    </View>
  )
}

function MusicRow({ music }: { music: MusicType }) {
  return(
    <View style={styles.card}>
      <View style={styles.cardMain}>
        <Text style={styles.cardTitle}>{music.name}</Text>
        <Text style={styles.cardSub}>{music.artist}, {music.album}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 8},
  screen: {},
  fab: {},
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
