import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormT = z.infer<typeof ForgotPasswordSchema>;

const useForgotPasswordForm = () =>
  useForm<ForgotPasswordFormT>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

export default useForgotPasswordForm;
