/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { useAuthForm } from "@/utils/validations/auth/authSchema";

export default function useSignInQuery() {
  const form = useAuthForm();

  const login = authStore.use.login();
  const cleanUpStatus = authStore.use.cleanUpStatus();
  const status = authStore.use.status();

  const onAuth = form.handleSubmit(async (values) => {
    try {
      await login({ email: values.email, password: values.password });

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

  return { form, onAuth, status };
}
