import {
    buttonVariants,
    Card,
    Cell,
    Deck,
    GridLine,
    Heading,
    Line,
    List,
    ListItem,
    Logo,
    Main,
    Section,
    Spacing,
} from "@/components";
import { Contact } from "@/features";
import { cn } from "@/utils";
import { createFileRoute, Link } from "@tanstack/react-router";

import Capa from "../../public/capa.svg?react";
import Informacao from "../../public/informacao.svg?react";
import Web from "../../public/web.svg?react";
import Educacao from "../../public/educacao.svg?react";

export const Route = createFileRoute("/_base/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Main
            metadata={{
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "elucidar.io",
                url: "https://elucidar.io",
                logo: "https://elucidar.io/logo-elucidar.io.png",
                description:
                    "Serviços e produtos tecnológicos para cultura, educação e informação.",
            }}
        >
            <GridLine top={false}>
                <Cell
                    className="col-start-1 col-span-4 flex flex-col justify-center gap-8"
                    right={false}
                >
                    <Heading mono color="pink" noMargin>
                        Serviços e produtos tecnológicos para <br /> cultura,
                        educação e informação.
                    </Heading>
                    <Link
                        to="/"
                        hash="contato"
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Contato
                    </Link>
                </Cell>
                <Cell
                    className="col-start-5 col-end-13 p-4"
                    left={false}
                    bottom={true}
                >
                    <Capa className="stroke-pink-45 dark:stroke-pink-65 fill-pink-45 dark:fill-pink-65" />
                </Cell>
            </GridLine>
            <Spacing className="h-16" />
            <Section id="servicos">
                <Line>
                    <Heading level={3} noMargin color="pink">
                        serviços
                    </Heading>
                </Line>
                <Line top={false}>
                    <Deck
                        pattern={"linear"}
                        patternColor={"pink"}
                        patternLight={"i"}
                        patternSize={"md"}
                        items={[
                            <Card className="flex flex-col md:flex-row gap-4 justify-between p-10 items-center">
                                <Informacao className="w-full stroke-pink-45 dark:stroke-pink-65 fill-pink-45 dark:fill-pink-65" />
                                <div className="flex flex-col w-full">
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
                                </div>
                            </Card>,
                            <Card className="flex flex-col md:flex-row gap-4 justify-between p-10 items-center">
                                <Web className="w-full stroke-pink-45 dark:stroke-pink-65 fill-pink-45 dark:fill-pink-65" />
                                <div className="flex flex-col w-full">
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
                                </div>
                            </Card>,
                            <Card className="flex flex-col md:flex-row gap-4 justify-between p-10 items-center">
                                <Educacao className="w-full stroke-pink-45 dark:stroke-pink-65 fill-pink-45 dark:fill-pink-65" />
                                <div className="flex flex-col w-full">
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
                                </div>
                            </Card>,
                        ]}
                    />
                </Line>
            </Section>
            <Spacing className="h-16" />
            <Section id="produtos">
                <Line>
                    <Heading level={3} noMargin color="blue">
                        produtos
                    </Heading>
                </Line>
                <Line top={false} className={cn("flex", "flex-col", "gap-4")}>
                    <Logo
                        name="elucidario.art"
                        className={cn("h-fit", "w-120", "self-start")}
                    />
                    <Heading level={4} className={cn("font-mono")}>
                        Sistema de Gestão de Coleções em ativo desenvolvimento.
                    </Heading>
                    <Link
                        to="https://elucidario.art?utm_source=elucidar.io"
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Saiba mais
                    </Link>
                </Line>
            </Section>
            <Spacing className="h-16" />
            <Section id="contato">
                <Line>
                    <Heading level={3} noMargin color="gray">
                        entre em contato
                    </Heading>
                </Line>
                <Line top={false}>
                    <Contact />
                </Line>
            </Section>
        </Main>
    );
}
