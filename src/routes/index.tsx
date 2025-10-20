import {
    Card,
    Deck,
    Heading,
    Line,
    Link,
    List,
    ListItem,
    Logo,
    Main,
    Section,
    Spacing,
} from "@/components";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Contact } from "@/features";
import { Base } from "@/layouts";
import { cn } from "@/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Base>
            <Main
                metadata={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "elucidar.io",
                    url: "https://elucidar.io",
                    logo: "https://elucidar.io/logo-elucidar.io.png",
                    description:
                        "Serviços e produtos tecnológicos para cultura, educação e informação.",
                    // sameAs: [
                    //     "https://www.linkedin.com/company/elucidar",
                    //     "https://twitter.com/elucidar_tech",
                    // ],
                }}
            >
                <Header className="sticky" />
                <Spacing className="h-16" />
                <Section id="servicos">
                    <Line>
                        <Heading level={3} color="pink">
                            serviços
                        </Heading>
                    </Line>
                    <Spacing />
                    <Line>
                        <Deck
                            pattern={"linear"}
                            patternColor={"pink"}
                            patternLight={"i"}
                            patternSize={"md"}
                            items={[
                                <Card>
                                    <Heading
                                        level={4}
                                        className={cn(
                                            "font-mono",
                                            "font-semibold",
                                            "mb-4"
                                        )}
                                    >
                                        Informação
                                    </Heading>
                                    <List>
                                        <ListItem>
                                            Catalogação e documentação de
                                            acervos
                                        </ListItem>
                                        <ListItem>
                                            Padronização e manutenção de base de
                                            dados
                                        </ListItem>
                                        <ListItem>
                                            Organização de sistemas
                                            informacionais
                                        </ListItem>
                                    </List>
                                </Card>,
                                <Card>
                                    <Heading
                                        level={4}
                                        className={cn(
                                            "font-mono",
                                            "font-semibold",
                                            "mb-4"
                                        )}
                                    >
                                        Web
                                    </Heading>
                                    <List>
                                        <ListItem>
                                            Consultoria e desenvolvimento de
                                            soluções web para cultura e educação
                                        </ListItem>
                                        <ListItem>
                                            Desenvolvimento, diagnóstico e
                                            manutenção de sites e aplicações
                                        </ListItem>
                                        <ListItem>
                                            Integração entre serviços
                                        </ListItem>
                                    </List>
                                </Card>,
                                <Card>
                                    <Heading
                                        level={4}
                                        className={cn(
                                            "font-mono",
                                            "font-semibold",
                                            "mb-4"
                                        )}
                                    >
                                        Educação e Cultura
                                    </Heading>
                                    <List>
                                        <ListItem>Cursos</ListItem>
                                        <ListItem>Palestras</ListItem>
                                        <ListItem>Oficinas</ListItem>
                                        <ListItem>Treinamentos</ListItem>
                                    </List>
                                </Card>,
                            ]}
                        />
                    </Line>
                </Section>
                <Spacing className="h-16" />
                <Section id="produtos">
                    <Line>
                        <Heading level={3} color="blue">
                            produtos
                        </Heading>
                    </Line>
                    <Spacing />
                    <Line className={cn("flex", "flex-col", "gap-4")}>
                        <Logo
                            name="elucidario.art"
                            className={cn("h-8", "self-start")}
                        />
                        <Heading level={4} className={cn("font-mono")}>
                            Sistema de Gestão de Coleções em ativo
                            desenvolvimento.
                        </Heading>
                        <Link
                            variant={"default"}
                            href="https://elucidario.art?utm_source=elucidar.io"
                        >
                            Saiba mais
                        </Link>
                    </Line>
                </Section>
                <Spacing className="h-16" />
                <Section id="contato">
                    <Line>
                        <Heading level={3} className={cn("text-gray-35")}>
                            entre em contato
                        </Heading>
                    </Line>
                    <Spacing />
                    <Line>
                        <Contact />
                    </Line>
                </Section>
            </Main>
            <Footer />
        </Base>
    );
}
