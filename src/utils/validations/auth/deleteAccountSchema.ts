import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword } from "@/utils/validations/helpers/customValidators";

const DeleteAccountSchema = z.object({
  password: z.string().min(8).refine(isValidPassword.validator, {
    message: isValidPassword.message,
  }),
});

export type DeleteAccountFormT = z.infer<typeof DeleteAccountSchema>;

const useDeleteAccountForm = () =>
  useForm<DeleteAccountFormT>({
    resolver: zodResolver(DeleteAccountSchema),
    defaultValues: {
      password: "",
    },
  });

export default useDeleteAccountForm;
