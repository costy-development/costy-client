/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import useRegistrationForm from "@/utils/validations/auth/registrationSchema";

export default function useRegistrationQuery() {
  const form = useRegistrationForm();

  const register = authStore.use.register();
  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onRegistration = form.handleSubmit(async (values) => {
    try {
      await register({
        username: values.username,
        email: values.email,
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

  return { form, onRegistration, status };
}
