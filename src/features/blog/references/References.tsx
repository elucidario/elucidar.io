import { buttonVariants, Cell, GridLine, Heading, Text } from "@/components";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";
import { allReferences } from "content-collections";
import { Activity } from "react";

export type ReferencesProps = {
    url: string;
    references: typeof allReferences;
};

export function References({ url, references }: ReferencesProps) {
    return (
        <Activity mode={references.length > 0 ? "visible" : "hidden"}>
            <section id="references">
                <GridLine>
                    <Cell
                        className={cn(
                            "flex flex-col px-4 md:px-0",
                            "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                        )}
                    >
                        <Heading
                            mono
                            level={2}
                            className={cn(
                                "m-0",
                                "flex gap-4",
                                "col-start-3 col-end-10 md:grid md:grid-cols-subgrid"
                            )}
                        >
                            <Link
                                to={url}
                                hash="references"
                                className={cn(
                                    buttonVariants({ variant: "link" }),
                                    "justify-self-end"
                                )}
                            >
                                #
                            </Link>
                            <span className="col-start-2">Referências</span>
                        </Heading>
                    </Cell>
                </GridLine>
                <GridLine top={false}>
                    <Cell
                        className={cn(
                            "flex flex-col px-4 md:px-0",
                            "md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid",
                            "pt-4"
                        )}
                    >
                        <ul className="my-4 col-start-3 col-span-7 grid grid-cols-subgrid">
                            {references.map((ref) => (
                                <li
                                    key={ref._meta.path}
                                    className={
                                        "col-start-1 col-span-7 grid grid-cols-subgrid"
                                    }
                                >
                                    <Link
                                        to={`/blog/referencias/${ref._meta.path}`}
                                        className={cn(
                                            "row-1",
                                            buttonVariants({ variant: "link" }),
                                            "justify-self-end"
                                        )}
                                    >
                                        #
                                    </Link>
                                    <Text
                                        noMargin
                                        className="row-1 col-start-2 col-end-7"
                                    >
                                        {ref.title}
                                    </Text>
                                </li>
                            ))}
                        </ul>
                    </Cell>
                </GridLine>
            </section>
        </Activity>
    );
}
