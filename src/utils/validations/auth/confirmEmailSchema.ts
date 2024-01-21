import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isNumeric } from "@/utils/validations/helpers/customValidators";

const ConfirmEmailSchema = z.object({
  pin: z.string().refine(isNumeric.validator, {
    message: isNumeric.message,
  }),
});

export type ConfirmEmailFormT = z.infer<typeof ConfirmEmailSchema>;

const useConfirmEmailForm = () =>
  useForm<ConfirmEmailFormT>({
    resolver: zodResolver(ConfirmEmailSchema),
    defaultValues: {
      pin: "",
    },
  });

export default useConfirmEmailForm;
