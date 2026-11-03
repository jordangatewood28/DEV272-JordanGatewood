export type MusicForm = {
    name: string;
    album: string;
    artist: string;
    rating: number;
    notes: string;
    mustListen: boolean;
}

export type MusicErrors = Partial<Record<keyof MusicForm, string>>

export const NOTES_MAX = 300;

export function validateMusic(form: MusicForm): MusicErrors {
    const errors: MusicErrors = {}

    const name = form.name.trim();
    if (!name) errors.name = "Name is required.";
    else if (name.length < 1) errors.name = "Name must at least have a character." //I have found an odd one with just a period while browsing the internet

    if (!form.album.trim()) errors.album = "Album name is required.";
    if (!form.artist.trim()) errors.artist = "An artist name is required.";

    if (form.notes.length > NOTES_MAX)
        errors.notes = `Notes must not exceed ${NOTES_MAX} characters.`;

    return errors;
}