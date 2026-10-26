import { View, Text, StyleSheet } from "react-native"

export default function Platforms() {
    return(
        <View style={styles.container}>
            <Text>No known platforms yet.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center", justifyContent: "center"}
});