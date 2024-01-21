/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { authStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import useDeleteAccountForm from "@/utils/validations/auth/deleteAccountSchema";

export default function useDeleteAccountQuery() {
  const form = useDeleteAccountForm();

  const deleteAccount = authStore.use.deleteAccount();
  const cleanUpStatus = authStore.use.cleanUpStatus();
  const status = authStore.use.status();
  const { _id } = authStore.use.user();

  const onDeleteAccount = form.handleSubmit(async (values) => {
    try {
      if (!_id) return;

      await deleteAccount({ userId: _id, password: values.password });
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { onDeleteAccount, status, form };
}
