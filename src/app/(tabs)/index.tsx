import { View, Text, StyleSheet } from "react-native"

export default function Music() {
    return(
        <View style={styles.container}>
            <Text>No music yet.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center"}
});