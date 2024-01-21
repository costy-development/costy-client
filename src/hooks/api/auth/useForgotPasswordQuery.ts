/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import useForgotPasswordForm from "@/utils/validations/auth/forgotPasswordSchema";

export default function useForgotPasswordQuery() {
  const form = useForgotPasswordForm();

  const forgotPassword = authStore.use.forgotPassword();
  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onForgotPassword = form.handleSubmit(async (values) => {
    try {
      await forgotPassword({
        email: values.email,
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

  return { form, onForgotPassword, status };
}
