import { Text } from "@/components";
import { isNoteElement, useNotesStore } from "./store";
import { cn } from "@/utils/utils";
import type React from "react";

export type NotesProps = {
    notes?: React.ReactElement[] | React.ReactElement | null;
};

export function Notes({ notes }: NotesProps): React.ReactNode {
    const { getNote, getNotePosition } = useNotesStore();

    if (!notes) {
        return null;
    }

    const noteArray = Array.isArray(notes) ? notes : [notes];

    // Filter valid note elements
    const validNotes = noteArray.filter(isNoteElement);

    if (validNotes.length === 0) {
        return null;
    }

    return (
        <div className={cn("flex flex-col gap-2")}>
            {validNotes.map((note: any) => {
                const noteId = note.props.id;
                const noteData = getNote(noteId);
                const position = getNotePosition(noteId);

                return (
                    <Text
                        size="sm"
                        className={cn("flex flex-row gap-2 items-start pl-2")}
                        key={noteId}
                    >
                        <sup
                            className={cn(
                                "text-xs",
                                "bg-pink-75",
                                "text-pink-15",
                                "px-1"
                            )}
                        >
                            {position + 1}
                        </sup>
                        {noteData?.content}
                    </Text>
                );
            })}
        </div>
    );
}
