import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UiStore = {
    theme: "light" | "dark";
    color: "gray" | "blue" | "pink";
    actions: {
        /**
         * ## Sets the UI theme.
         * @param theme - The theme to set, either "light" or "dark".
         */
        setTheme: (theme: "light" | "dark") => void;
        /**
         * ## Sets the UI color.
         * @param color - The color to set, either "gray", "blue", or "pink".
         */
        setColor: (color: "gray" | "blue" | "pink") => void;
    };
};

export const useUiStore = create<UiStore>()(
    persist(
        (set) => ({
            theme: "light",
            color: "pink",
            actions: {
                setTheme: (theme: "light" | "dark") => {
                    set({ theme });
                },
                setColor: (color: "gray" | "blue" | "pink") => {
                    set({ color });
                },
            },
        }),
        {
            name: "elucidario-ui-store",
            partialize: (state) => ({
                theme: state.theme,
            }),
        }
    )
);

export const useUiTheme = () => useUiStore((state) => state.theme);

export const useUiColor = () => useUiStore((state) => state.color);

export const useUiActions = () => useUiStore((state) => state.actions);
