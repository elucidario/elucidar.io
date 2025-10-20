import { createServerFn } from "@tanstack/react-start";
import axios from "axios";

import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    message: z.string().min(1, "Mensagem é obrigatória"),
});

export const sendTransactionalEmail = createServerFn({ method: "POST" })
    .inputValidator(contactSchema)
    .handler(async ({ data }) => {
        const webhook = process.env.WEBHOOK_URL;

        const options = {
            method: "POST",
            url: webhook,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                subject: "contato elucidar.io",
                from: "bot@elucidar.io",
                to: "ola@elucidar.io",
                html: `<p>Nome: ${data.name}</p>
<p>Email: ${data.email}</p>
<p>Mensagem: ${data.message}</p>`,
            },
        };

        const response = await axios.request(options);
        if (response.status === 200) {
            return true;
        }
        console.error("Failed to send email", { response });
        throw new Error("Failed to send email");
    });
