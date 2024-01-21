/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import useConfirmEmailForm from "@/utils/validations/auth/confirmEmailSchema";

export default function useConfirmEmailQuery() {
  const form = useConfirmEmailForm();

  const confirmEmail = authStore.use.confirmEmail();
  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onConfirmEmail = form.handleSubmit(async (values) => {
    try {
      await confirmEmail({
        pin: +values.pin,
      });

      form.reset();
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { form, onConfirmEmail, status };
}
