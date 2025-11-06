import { Text } from "@/components";
import { cn } from "@/utils";
import { useEffect, type PropsWithChildren } from "react";
import { useNotesStore } from "./store";
import type { NoteProps } from "./types";

export function Note({ id, content, children }: PropsWithChildren<NoteProps>) {
    const { setNote, getNotePosition } = useNotesStore();

    useEffect(() => {
        setNote(id, content);
    }, [id, content, setNote]);

    return (
        <Text
            element="small"
            size={"sm"}
            className={cn("bg-pink-75/25", "rounded-sm pl-1")}
        >
            {children}
            <sup
                className={cn(
                    "align-super",
                    "bg-pink-75",
                    "text-pink-15",
                    "px-1"
                )}
            >
                {getNotePosition(id) + 1}
            </sup>
        </Text>
    );
}
