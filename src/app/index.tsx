import { StyleSheet, Text, View } from "react-native";

// This is the home screen (route "/").
// Week 1: change the two lines marked 👇, run the app, commit, push.
export default function Index() {
  // 👇 Week 1: replace with your name
  const studentName = "Jordan Gatewood";
  // 👇 Week 1: replace with something you want to build this quarter
  const appIdea = " many things, but one that I think would be interesting is a music app with a 'selective loop' function";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player with Selective Loop.</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeHolder="Search Musics" />
        <Button style={styles.button} onPress{() => console.log("Search")}
      </View>
      <Text style={styles.body}>Hello, I am {studentName}.</Text>
      <Text style={styles.body}>This quarter I want to build {appIdea}.</Text>
      <Text style={styles.hint}>Edit src/app/index.tsx to change this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
