export type UmamiOptions<
    T extends Record<string, string | undefined> = Record<
        string,
        string | undefined
    >
> = {
    name: string;
} & T;

export function umamiProps<
    T extends Record<string, string | undefined> = Record<
        string,
        string | undefined
    >
>({ name, ...props }: UmamiOptions<T>) {
    return {
        "data-umami-event": name,
        ...Object.entries(props).map(([key, value]) => [
            `data-umami-event-${key}`,
            value,
        ]),
    };
}

export type UmamiProps<
    T extends Record<string, string | undefined> = Record<
        string,
        string | undefined
    >
> = ReturnType<typeof umamiProps<T>>;
