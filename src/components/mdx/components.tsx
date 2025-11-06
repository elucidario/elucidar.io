import { cn } from "@/utils";
import {
    Heading,
    Text,
    Image,
    GridLine,
    Cell,
    Note,
    Notes,
} from "@/components";
import type React from "react";
// import { Note, useNotesStore } from "@/components";

export const markdown = {
    h1: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono {...props} />
    ),
    h2: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono level={2} {...props} />
    ),
    h3: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono level={2} {...props} />
    ),
    h4: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono level={4} {...props} />
    ),
    h5: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono level={5} {...props} />
    ),
    h6: (props: React.ComponentProps<typeof Heading>) => (
        <Heading mono level={6} {...props} />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn(
                "font-medium underline underline-offset-4",
                className
            )}
            {...props}
        />
    ),
    p: (props: React.ComponentProps<typeof Text>) => <Text {...props} />,
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <img
            className={cn("rounded-md border", className)}
            alt={alt}
            {...props}
        />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="w-full overflow-y-auto">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn("m-0 border-t p-0 even:bg-muted", className)}
            {...props}
        />
    ),
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border-gray-45/25 dark:border-gray-65/25",
                "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border-gray-45/25 dark:border-gray-65/25",
                "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className={cn(
                "overflow-x-auto border-0 bg-dark dark:bg-light p-4",
                className
            )}
            {...props}
        />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn("relative font-mono text-sm", className)}
            {...props}
        />
    ),
};

export const gridMarkdown = {
    ...markdown,
    h1: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            <Cell
                className={cn(
                    "flex flex-col px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                {markdown.h1({
                    className: cn(
                        "col-start-4 col-end-10",
                        "m-0",
                        "flex",
                        "gap-4",
                        "md:-ml-8",
                        props.className
                    ),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    h2: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            <Cell
                className={cn(
                    "flex flex-col px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                {markdown.h2({
                    className: cn(
                        "col-start-4 col-end-10",
                        "m-0",
                        "flex",
                        "gap-4",
                        "md:-ml-8",
                        props.className
                    ),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    h3: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            <Cell
                className={cn(
                    "flex flex-col px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                {markdown.h3({
                    className: cn(
                        "col-start-4 col-end-10",
                        "m-0",
                        "flex",
                        "gap-4",
                        "md:-ml-8",
                        props.className
                    ),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    h4: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            {" "}
            <GridLine>
                <Cell
                    className={cn(
                        "flex flex-col px-4 md:px-0",
                        "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                    )}
                >
                    {markdown.h4({
                        className: cn(
                            "col-start-4 col-end-10",
                            "m-0",
                            "flex",
                            "gap-4",
                            "md:-ml-8",
                            props.className
                        ),
                        ...props,
                    })}
                </Cell>
            </GridLine>
        </GridLine>
    ),
    h5: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            <Cell
                className={cn(
                    "flex flex-col px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                {markdown.h5({
                    className: cn(
                        "col-start-4 col-end-10",
                        "m-0",
                        "flex",
                        "gap-4",
                        "md:-ml-8",
                        props.className
                    ),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    h6: (props: React.ComponentProps<typeof Heading>) => (
        <GridLine>
            <Cell
                className={cn(
                    "flex flex-col px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                {markdown.h6({
                    className: cn(
                        "col-start-4 col-end-10",
                        "m-0",
                        "flex",
                        "gap-4",
                        "md:-ml-8",
                        props.className
                    ),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    p: (props: React.ComponentProps<typeof Text>) => {
        return (
            <GridLine top={false} bottom={false}>
                <Cell
                    className={cn(
                        "flex flex-col px-4 md:px-0",
                        "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid",
                        "pt-4"
                    )}
                >
                    {markdown.p({
                        className: cn(
                            "col-start-4 col-end-10",
                            props.className
                        ),
                        ...props,
                    })}
                    <Cell
                        left={false}
                        right={false}
                        className={cn("col-start-10 col-end-13 flex flex-col")}
                    >
                        <Notes notes={props.children as React.ReactElement[]} />
                    </Cell>
                </Cell>
            </GridLine>
        );
    },
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn("col-start-1 col-end-13 grid grid-cols-subgrid")}
            >
                {markdown.ul({
                    className: cn("my-6 ml-6 list-disc", className),
                    ...props,
                })}
            </Cell>
        </GridLine>
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn("col-start-1 col-end-13 grid grid-cols-subgrid")}
            >
                {markdown.ol(props)}
            </Cell>
        </GridLine>
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn("col-start-1 col-end-13 grid grid-cols-subgrid")}
            >
                {markdown.li(props)}
            </Cell>
        </GridLine>
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn("col-start-1 col-end-13 grid grid-cols-subgrid")}
            >
                {markdown.blockquote(props)}
            </Cell>
        </GridLine>
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn("col-start-1 col-end-13 grid grid-cols-subgrid")}
            >
                {markdown.img(props)}
            </Cell>
        </GridLine>
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell className={cn("col-start-1 col-end-13")}>
                {markdown.table(props)}
            </Cell>
        </GridLine>
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <GridLine top={false} bottom={false}>
            <Cell className={cn("col-start-1 col-end-13")}>
                {markdown.pre(props)}
            </Cell>
        </GridLine>
    ),
    Image: (
        props: React.ComponentProps<typeof Image> & { caption: string }
    ) => (
        <GridLine
            pattern={{
                pattern: "linear",
            }}
            className={cn("bg-light dark:bg-dark")}
        >
            <Cell
                className={cn(
                    "col-start-1 col-end-4",
                    "md:h-120",
                    "w-full",
                    "flex",
                    "items-end",
                    "justify-end",
                    "md:order-first"
                )}
                right={false}
            >
                <Text mono element="small" size="sm" className="text-right">
                    {props.caption}
                </Text>
            </Cell>
            <Image
                className={cn(
                    "col-start-4 col-end-13",
                    "h-120",
                    "w-full",
                    "object-cover",
                    "order-first",
                    props.className
                )}
                {...props}
            />
        </GridLine>
    ),
    Text: (props: React.ComponentProps<typeof Text>) => (
        <GridLine top={false} bottom={false}>
            <Cell
                className={cn(
                    "flex px-4 md:px-0",
                    "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid",
                    "pt-4"
                )}
            >
                <Text
                    className={cn("col-start-4 col-end-10", props.className)}
                    {...props}
                />
                <Cell
                    left={false}
                    right={false}
                    className={cn("col-start-10 col-end-13 flex flex-col")}
                >
                    <Notes notes={props.children as React.ReactElement[]} />
                </Cell>
            </Cell>
        </GridLine>
    ),
    Note: (props: React.ComponentProps<typeof Note>) => <Note {...props} />,
};
