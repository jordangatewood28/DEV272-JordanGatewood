import { MusicType, music } from "@/data/music";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// This is the home screen (route "/").
// Week 1: change the two lines marked 👇, run the app, commit, push.
export default function Index() {
  return (
    <FlatList
      data={music}
      keyExtractor={(m) => m.id}
      renderItem{({ item }) => <MusicRow music={item}/>}
      ListHeaderCompnent={<Header />}
      contentContainerStyle={styles.list} />
  );
}

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music List</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Search music" />
        <Pressable style={styles.button} onPress={() => console.log("Search")}>
          <Text style={styles.button}>Go</Text>
        </Pressable>
      </View>
    </View>
  )
}

function MusicRow({ music }: { music: MusicType }) {
  <View style={styles.card}>
    <View style={styles.cardMain}>
      <Text style={styles.cardTitle}></Text>
      <Text style={styles.cardSub}></Text>
    </View>
  </View>
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
  },
  cardMain: {flex: 1, gap: 2},
  cardTitle: { fontWeight: "600"},
  cardSub: {color: "gray"},
});
