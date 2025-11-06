import { buttonVariants, Cell, GridLine, Text } from "@/components";
import { paragraphVariants } from "@/components/typography/variants";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";

export function BackToPosts() {
    return (
        <GridLine>
            <Cell
                className={cn(
                    "flex",
                    "md:row-1 md:col-start-1 md:col-end-13 md:grid md:grid-cols-subgrid"
                )}
            >
                <Link
                    to="/blog"
                    className={cn(
                        paragraphVariants({
                            noMargin: true,
                            mono: true,
                        }),
                        buttonVariants({
                            variant: "link",
                        }),
                        "flex gap-2 justify-items-start",
                        "md:col-start-3 md:col-span-4",
                        "md:inline-grid md:grid-cols-subgrid"
                    )}
                >
                    <Text
                        noMargin
                        mono
                        color={"none"}
                        className={cn("col-start-1 row-1", "justify-self-end")}
                    >
                        {"<-"}
                    </Text>
                    <Text
                        noMargin
                        mono
                        color={"none"}
                        className={cn("col-start-2 row-1")}
                    >
                        {"ver todos os posts"}
                    </Text>
                </Link>
            </Cell>
        </GridLine>
    );
}
