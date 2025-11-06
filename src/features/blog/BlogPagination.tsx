import { Cell, GridLine, Text } from "@/components";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";

export type BlogPaginationProps = {
    total: number;
    limit: number;
    offset: number;
};

export function BlogPagination({ total, limit, offset }: BlogPaginationProps) {
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return (
        <GridLine>
            <Cell className={cn("col-start-1 col-end-13 flex justify-end")}>
                <Text noMargin mono>
                    {`${total} posts:`}
                </Text>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    const pageOffset = (page - 1) * limit;
                    const isActive = page === currentPage;

                    return (
                        <Text
                            key={page}
                            noMargin
                            mono
                            className={cn(
                                "mx-2",
                                isActive
                                    ? "font-bold"
                                    : "opacity-50 hover:opacity-100"
                            )}
                        >
                            <Link
                                to={"/blog"}
                                search={{
                                    offset: pageOffset,
                                    limit,
                                }}
                            >
                                {page}
                            </Link>
                        </Text>
                    );
                })}
            </Cell>
        </GridLine>
    );
}
