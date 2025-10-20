import { cn } from "@/utils";
import { MenuItem } from "./MenuItem";
import { Line } from "../line";

export function Menu() {
    return (
        <Line className={"justify-end"}>
            <nav>
                <ul className={cn("flex", "gap-8")}>
                    <MenuItem color={"pink"} href="#servicos">
                        serviços
                    </MenuItem>
                    <MenuItem color={"blue"} href="#produtos">
                        produtos
                    </MenuItem>
                    <MenuItem href="#contato">contato</MenuItem>
                </ul>
            </nav>
        </Line>
    );
}
