import type { ListItemProps } from "./types";

export function ListItem({ ...props }: ListItemProps) {
    return <li {...props} />;
}
