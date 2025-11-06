export function sortPostsByDate(posts: any[], order: "asc" | "desc"): any[] {
    return [...posts].sort((a, b) => {
        if (order === "asc") {
            return a.publishedAt.localeCompare(b.publishedAt);
        }
        return b.publishedAt.localeCompare(a.publishedAt);
    });
}
