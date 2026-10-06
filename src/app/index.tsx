import {MusicType, music} from "@/data/music";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// This is the home screen (route "/").
// Week 1: change the two lines marked 👇, run the app, commit, push.
export default function Index() {
  return (
    <Flatlist
      data={music}
      keyExtractor={(m) => m.id}
      renterItem{({ item }) => <MusicRow music={item} />}
      ListHeaderCompnent={<Header />}
      contentContainerStyle={styles.list}
  );
}

function Header() {
  return (
    <View>
      <Text style={styles.title}>Music List</Text>
      <View style={styles.row}>
        <TextInput {style=styles.input} palceholder="Search music" />
        <Pressable style={styles.button} onPress={() => console.log("Search")}>
          <Text style={styles.button}>Go</Text>
        </Pressable>
      </View>
    </View>
  )
}

function MusicRow({music}: {music: MusicType}) {
  <View style={styles.card}></View>
  <View>
    <Text style={styles.cardTitle}>{music.name}</Text>
    <Text style={styles.cardSub}>{music.artist}</Text>
  </View>
  <Text style={styles.cardSub}>
    {music.album}, {music.id}
  </Text>
}

const styles = StyleSheet.create({
  list { padding: 16, gap: 8},
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
  body: {
    fontSize: 16,
    textAlign: "center",
  },
  hint: {
    marginTop: 24,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});
