import { create } from "zustand";
import type { NotesStore, NoteStoreValue } from "./types";
import type { Note } from "./Note";

export const useNotesStore = create<NotesStore>((set, get) => ({
    notes: new Map<string, NoteStoreValue>(),
    setNote: (id: string, content: string) =>
        set((state: { notes: Map<string, NoteStoreValue> }) => {
            const newNotes = new Map(state.notes);
            newNotes.set(id, { content });
            return { notes: newNotes };
        }),
    getNote: (id: string) => {
        return get().notes.get(id);
    },
    hasNote: (id: string) => {
        return get().notes.has(id);
    },
    getNotePosition: (id: string) => {
        const notes = get().notes;
        let position = 0;
        for (const key of notes.keys()) {
            if (key === id) {
                return position;
            }
            position++;
        }
        return -1;
    },
}));

export function isNoteElement(note: any): note is typeof Note {
    return (
        typeof note === "object" &&
        note !== null &&
        "type" in note &&
        note.type.name === "Note" &&
        "props" in note &&
        typeof note.props.id === "string"
    );
}
