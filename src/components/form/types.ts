import type {
    SubmitErrorHandler,
    SubmitHandler,
    UseFormProps,
} from "react-hook-form";
import type { z } from "zod";

export type FormProps<T extends Record<string, unknown>> = {
    schema: z.ZodType<T>;
    hookProps?: UseFormProps<T>;
    submitLabel?: string;
    disabled?: boolean;

    onValid: SubmitHandler<T>;
    onInvalid?: SubmitErrorHandler<T>;
} & React.FormHTMLAttributes<HTMLFormElement>;

export type FormProviderProps<T extends Record<string, unknown>> = FormProps<T>;
