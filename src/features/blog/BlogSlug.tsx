import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { create } from "zustand";

type BlogSlugStore = {
    ref: HTMLDivElement | null;
    setRef: (ref: HTMLDivElement) => void;
};

const blogSlugStore = create<BlogSlugStore>((set) => ({
    ref: null,

    setRef: (ref: HTMLDivElement) => set({ ref }),
}));

const useBlogSlugRef = () => blogSlugStore((state) => state.ref);

export function BlogSlugContainer({
    ref,
}: {
    ref?: React.Ref<HTMLDivElement>;
}) {
    const setRef = blogSlugStore((state) => state.setRef);

    return (
        <div
            ref={(node) => {
                if (ref && typeof ref === "function") {
                    ref(node);
                } else if (ref && "current" in ref) {
                    ref.current = node;
                }

                if (node) {
                    setRef(node);
                }
            }}
        ></div>
    );
}

export function BlogSlug({ children }: PropsWithChildren) {
    const blogSlugRef = useBlogSlugRef();
    if (!blogSlugRef) return null;
    return createPortal(children, blogSlugRef);
}
