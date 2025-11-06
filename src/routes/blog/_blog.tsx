import { Footer, Header, Spacing } from "@/components";
import { BackToPosts, BlogSlugContainer } from "@/features";
import { PrimaryMenu } from "@/features/menu";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/_blog")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <Header menu={<PrimaryMenu />}>
                <BlogSlugContainer />
            </Header>
            <Spacing className="h-8" />
            <BackToPosts />
            <Outlet />
            <Footer />
        </>
    );
}
