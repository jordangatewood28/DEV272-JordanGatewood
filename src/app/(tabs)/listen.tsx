import { View, Text, StyleSheet } from "react-native"

export default function Music() {
    return(
        <View style={styles.container}>
            <Text>No music added to the list yet.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center"}
});