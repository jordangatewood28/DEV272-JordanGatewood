import {FlatList, StyleSheet, Text, View} from "react-native"

import { MusicRow } from "@/components/MusicRow";
import { useListen } from "@/context/ListenContext";
import { musics } from "@/data/music";
import { usePalette } from "@/hooks/usePalette";

export default function ListenList() {
    const c = usePalette();
    const {listen} = useListen();
    const toListen = musics.filter((m) =>
        listen.includes(m.id),
    );

    if (toListen.length === 0) {
        return(
            <View style={styles.empty}>
                <Text style={{color: c.muted}}>
                    No music added to your list. Tap a song to add one.
                </Text>
            </View>
        );
    }

    return(
        <FlatList
            data={listen}
            keyExtractor={(m) => m}
            renderItem={({item}) => <MusicRow music={item} />}
            contentContainerStyle={styles.list}
        />
    )
}

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    list: {padding: 16, gap: 8},
});