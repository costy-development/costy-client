import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  isValidPassword,
  confirmPasswordValidation,
} from "@/utils/validations/helpers/customValidators";

const UpdatePasswordSchema = z
  .object({
    password: z.string().min(8).refine(isValidPassword.validator, {
      message: isValidPassword.message,
    }),
    confirm_password: z.string(),
  })
  .refine(
    (data) =>
      confirmPasswordValidation.validator(data.password, data.confirm_password),
    {
      message: confirmPasswordValidation.message,
      path: ["confirm_password"],
    }
  );

export type UpdatePasswordFormT = z.infer<typeof UpdatePasswordSchema>;

const useUpdatePasswordForm = () =>
  useForm<UpdatePasswordFormT>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

export default useUpdatePasswordForm;
