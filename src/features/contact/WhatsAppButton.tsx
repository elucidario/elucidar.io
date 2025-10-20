import { Submit } from "@/components/form";
import { cn } from "@/utils";
import { useWatch } from "react-hook-form";

export function WhatsAppButton() {
    const { name, email, message } = useWatch();

    const text = `Olá, meu nome é ${name || "[seu nome]"}.
Gostaria de entrar em contato com vocês.
Meu email é ${email || "[seu email]"}.
${message ? `${message}` : ""}`;

    return (
        <Submit
            id="enviar-whatsapp"
            // className={cn(buttonVariants({ className: "w-full" }))}
            // target="_blank"
            // href={`https://wa.me/5511993824116?text=${encodeURIComponent(
            //     text
            // )}`}
        >
            Enviar WhatsApp
        </Submit>
    );
}
