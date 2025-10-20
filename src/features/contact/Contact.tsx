import { Label, Input, Textarea, Submit } from "@/components/form";
import { pattern } from "@/styles";
import { cn } from "@/utils";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Heading, Text } from "@/components";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useServerFn } from "@tanstack/react-start";
import { contactSchema, sendTransactionalEmail } from "./functions";
import { useNavigate } from "@tanstack/react-router";

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
    const [state, setState] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const methods = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur",
    });

    const sendEmail = useServerFn(sendTransactionalEmail);

    const navigate = useNavigate();

    const onValid = async (data: ContactForm, e?: BaseSyntheticEvent) => {
        setState("loading");

        if (
            (e?.nativeEvent as SubmitEvent)?.submitter?.id === "enviar-whatsapp"
        ) {
            const text = `Olá, meu nome é ${data.name || "[seu nome]"}.
Gostaria de entrar em contato com vocês.
Meu email é ${data.email || "[seu email]"}.
${data.message ? `${data.message}` : ""}`;
            return navigate({
                href: `https://wa.me/5511993824116?text=${encodeURIComponent(
                    text
                )}`,
            });
        }

        if ((e?.nativeEvent as SubmitEvent)?.submitter?.id === "enviar-email") {
            const result = await sendEmail({ data });
            if (!result) {
                setState("error");
                return;
            }
            setState("success");
        }
    };

    useEffect(() => {
        if (["success", "error"].includes(state)) {
            if (state === "success") {
                methods.reset();
            }

            const timeout = setTimeout(() => {
                setState("idle");
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [state, methods]);

    return (
        <div
            className={cn(
                "w-full",
                pattern({
                    pattern: "linear",
                    patternColor: "pink",
                    patternLight: "i",
                    patternSize: "md",
                }),
                "p-4"
            )}
        >
            <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
                <Card className="md:max-w-sm">
                    <FormProvider {...methods}>
                        <form
                            className={cn("flex", "flex-col", "gap-4")}
                            onSubmit={methods.handleSubmit(onValid)}
                        >
                            <div className={cn("flex", "flex-col", "gap-2")}>
                                <Label>Nome</Label>
                                <Input
                                    disabled={state === "loading"}
                                    {...methods.register("name")}
                                />
                                {methods.formState.errors.name && (
                                    <span className="text-red-500 text-sm">
                                        {methods.formState.errors.name.message}
                                    </span>
                                )}
                            </div>
                            <div className={cn("flex", "flex-col", "gap-2")}>
                                <Label>Email</Label>
                                <Input
                                    disabled={state === "loading"}
                                    {...methods.register("email")}
                                />
                                {methods.formState.errors.email && (
                                    <span className="text-red-500 text-sm">
                                        {methods.formState.errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className={cn("flex", "flex-col", "gap-2")}>
                                <Label>Mensagem</Label>
                                <Textarea
                                    disabled={state === "loading"}
                                    {...methods.register("message")}
                                />
                                {methods.formState.errors.message && (
                                    <span className="text-red-500 text-sm">
                                        {
                                            methods.formState.errors.message
                                                .message
                                        }
                                    </span>
                                )}
                            </div>
                            <div
                                className={cn(
                                    "flex",
                                    "flex-col md:flex-row",
                                    "justify-center",
                                    "mt-2",
                                    "gap-4"
                                )}
                            >
                                <Submit
                                    track={{
                                        name: "send-email",
                                    }}
                                    id="enviar-email"
                                    className="w-full"
                                >
                                    Enviar e-mail
                                </Submit>
                                <Submit
                                    track={{
                                        name: "send-whatsapp",
                                    }}
                                    id="enviar-whatsapp"
                                    className="w-full"
                                >
                                    Enviar WhatsApp
                                </Submit>
                            </div>
                        </form>
                    </FormProvider>
                </Card>
                <Card className="md:max-w-sm order-first md:order-last">
                    <AnimatePresence>
                        {(() => {
                            switch (state) {
                                case "idle":
                                    return (
                                        <motion.div
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col gap-4"
                                        >
                                            <Heading
                                                level={3}
                                                className={cn("font-mono")}
                                            >
                                                Fale conosco
                                            </Heading>
                                            <Text>
                                                Responderemos o mais breve
                                                possível.
                                            </Text>
                                        </motion.div>
                                    );

                                case "loading":
                                    return (
                                        <Heading
                                            level={3}
                                            className={cn("font-mono")}
                                            exit={{ opacity: 0 }}
                                        >
                                            Enviando sua mensagem...
                                        </Heading>
                                    );

                                case "success":
                                    return (
                                        <Heading
                                            level={3}
                                            className={cn("font-mono")}
                                            exit={{ opacity: 0 }}
                                        >
                                            Tudo certo! Recebemos sua mensagem e
                                            responderemos em breve.
                                        </Heading>
                                    );

                                case "error":
                                    return (
                                        <motion.div
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col gap-4"
                                        >
                                            <Heading
                                                level={3}
                                                className={cn("font-mono")}
                                                exit={{ opacity: 0 }}
                                            >
                                                Ops! Ocorreu um erro ao enviar.
                                            </Heading>
                                            <Text>
                                                Envie diretamente para o e-mail
                                                ola@elucidar.io
                                            </Text>
                                        </motion.div>
                                    );
                            }
                        })()}
                    </AnimatePresence>
                </Card>
            </div>
        </div>
    );
}
