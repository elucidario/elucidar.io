import type { JsonLDProps } from "./types";

export function JsonLD<T extends Record<string, unknown>>({
    data,
}: JsonLDProps<T>) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}
