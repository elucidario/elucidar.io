import type { HTMLAttributes } from "react";

export type SectionProps<T extends Record<string, unknown>> =
    HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement>;
        metadata?: T;
    };
