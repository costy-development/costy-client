/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import useUpdatePasswordForm from "@/utils/validations/auth/updatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const form = useUpdatePasswordForm();

  const updatePassword = authStore.use.updatePassword();
  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onUpdatePassword = form.handleSubmit(async (values) => {
    try {
      await updatePassword({
        password: values.password,
        confirm_password: values.confirm_password,
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

  return { form, onUpdatePassword, status };
}
