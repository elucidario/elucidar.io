import { cn } from "@/utils";
import { useMDXComponent } from "@content-collections/mdx/react";
import type React from "react";

export type MdxProps = {
    code: string;
    components: Record<string, React.ComponentType<any>>;
} & React.HTMLAttributes<HTMLDivElement>;

export function Mdx({ className, code, components, ...props }: MdxProps) {
    const Component = useMDXComponent(code);
    return (
        <div className={cn("mdx", className)} {...props}>
            <Component components={components} />
        </div>
    );
}
