import { usePalette } from "@/hooks/usePalette";
import { ReactNode, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { MusicForm, validateMusic } from "./utils/validateList";

const EMPTY_FORM: MusicForm = {
    name: "",
    album: "",
    artist: "",
    rating: 1,
    notes: "",
    mustListen: false,
}

const RATING_IMAGE = require("@/assets/images/rating-star.png");

export default function AddMusic() {
    const c = usePalette();
    const [form, setForm] = useState<MusicForm>(EMPTY_FORM);

    const errors = validateMusic(form);

    const update = <K extends keyof MusicForm>(
        key: K, 
        value: MusicForm[K]
    ) => setForm((current) => ({...current, [key]: value}))

    const inputStyle = (key: keyof MusicForm) => [
        styles.input,
        { color: c.text, backgroundColor: c.card, borderColor: c.border}
    ];

    return(
    <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >

        <ScrollView
            contentContainerStyle={styles.form}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
        >
            <Field label="Name">
                <TextInput
                    style={inputStyle("name")}
                    value={form.name}
                    onChangeText={(t) => update("name", t)}
                    placeholder="FS-3 Ternion"
                    placeholderTextColor={c.muted}
                    autoCapitalize="words"
                    returnKeyType="next"
                    accessibilityLabel="Name"
                />
            </Field>
            <Field label="Artist">
                <TextInput
                    style={inputStyle("artist")}
                    value={form.artist}
                    onChangeText={(t) => update("artist", t)}
                    placeholder="Jeremy Sahl"
                    placeholderTextColor={c.muted}
                    autoCapitalize="words"
                    returnKeyType="next"
                    accessibilityLabel="Artist"
                />
            </Field> 
            <Field label="Album">
                <TextInput
                    style={inputStyle("album")}
                    value={form.album}
                    onChangeText={(t) => update("album", t)}
                    placeholder="FS-3 Ternion"
                    placeholderTextColor={c.muted}
                    autoCapitalize="words"
                    returnKeyType="next"
                    accessibilityLabel="Album"
                />
            </Field>
            <View>
                <Text style={[styles.label, {color: c.text}]}>Must Listen</Text>
                <Switch
                    value={form.mustListen}
                    onValueChange={(v) => update("mustListen", v)}
                    trackColor={{false: c.border, true: c.primary}}
                    ios_backgroundColor={c.border}
                    thumbColor="#fff"
                    accessibilityLabel="Must Listen"
                />
            </View>
            <Pressable 
                style={[styles.save, {backgroundColor: c.primary}]}
                onPress={() => console.log(form)}
            >
                <Text style={styles.saveText}>Save</Text>
            </Pressable>
        </ScrollView>
    </KeyboardAvoidingView>)
}

type FieldProps = {
    label: string;
    error?: string;
    hint?: string;
    children: ReactNode
}

function Field({label, error, hint, children}: FieldProps) {
    const c = usePalette();
    return (
        <View>
            <Text style={[styles.label, {color: c.text}]}>{label}</Text>
            {children}
            {error ? <Text style={{color: "red"}}>{error}</Text> : null}
            {!error && hint ? <Text style={{color: c.muted}}>{hint}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    form: {
        flexGrow: 1,
        padding: 16,
        gap: 16,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
    },
    label: {
        fontWeight: "600",
        marginBottom: 8,
    },
    save: {
        borderRadius: 8,
        padding: 12,
        alignItems: "center",
    },
    saveText: {
        color: "white",
        fontWeight: "600",
    },
});