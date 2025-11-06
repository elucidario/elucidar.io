import { Footer, Header } from "@/components";
import { PrimaryMenu } from "@/features/menu";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_base")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <Header menu={<PrimaryMenu />} />
            <Outlet />
            <Footer />
        </>
    );
}
