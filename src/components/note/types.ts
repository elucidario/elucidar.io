export type NotesStore = {
    notes: Map<string, NoteStoreValue>;
    setNote: (id: string, content: string) => void;
    getNote: (id: string) => NoteStoreValue | undefined;
    hasNote: (id: string) => boolean;
    getNotePosition: (id: string) => number;
};

export type NoteStoreValue = {
    content: string;
};

export type NoteProps = {
    id: string;
    content: string;
};
