import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword } from "@/utils/validations/helpers/customValidators";

const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).refine(isValidPassword.validator, {
    message: isValidPassword.message,
  }),
});

export type AuthSchemaT = z.infer<typeof AuthSchema>;

export const useAuthForm = () =>
  useForm<AuthSchemaT>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
