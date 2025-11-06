import { buttonVariants, Cell, GridLine, Text } from "@/components";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";
import { Activity, type HTMLAttributes } from "react";

export type PreviousNextProps = {
    previous: {
        title: string;
        path: string;
    } | null;
    next: {
        title: string;
        path: string;
    } | null;
};

export function PreviousNext({
    className,
    previous,
    next,
}: PreviousNextProps & HTMLAttributes<HTMLDivElement>) {
    return (
        <GridLine className={className}>
            <Activity mode={previous ? "visible" : "hidden"}>
                <Cell className="col-span-6 md:border-r-0 flex justify-start">
                    {previous && (
                        <Link
                            to={`/blog/${previous.path}`}
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "inline-flex",
                                "gap-4"
                            )}
                        >
                            <Text noMargin size="lg">
                                {"<-"}
                            </Text>
                            <Text noMargin size="lg">
                                {previous.title}
                            </Text>
                        </Link>
                    )}
                </Cell>
            </Activity>
            <Activity mode={next ? "visible" : "hidden"}>
                <Cell className="col-span-6 md:border-l-0 flex justify-end">
                    {next && (
                        <Link
                            to={`/blog/${next.path}`}
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "inline-flex",
                                "gap-4"
                            )}
                        >
                            <Text noMargin size="lg">
                                {next.title}
                            </Text>
                            <Text noMargin size="lg">
                                {"->"}
                            </Text>
                        </Link>
                    )}
                </Cell>
            </Activity>
        </GridLine>
    );
}
