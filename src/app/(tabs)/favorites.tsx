import { View, Text, StyleSheet } from "react-native"

export default function Favorties() {
    return(
        <View style={styles.container}>
            <Text>No favorites have been added yet.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center"}
})