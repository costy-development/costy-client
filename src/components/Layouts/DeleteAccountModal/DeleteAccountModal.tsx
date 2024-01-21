/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Controller } from "react-hook-form";

import { useDeleteAccountQuery } from "@/hooks/api/auth";

import {
  Modal,
  ErrorMessage,
  RelativeSpinner,
  TextFieldPassword,
} from "@/components/Layouts";
import * as Styled from "./deleteAccountModal.styled";

type DeleteAccountModalT = {
  open: boolean;
  onClose: () => void;
};

const DeleteAccountModal: React.FC<DeleteAccountModalT> = ({
  open,
  onClose,
}) => {
  const { onDeleteAccount, status, form } = useDeleteAccountQuery();

  useEffect(() => {
    if (status.status === "SUCCESS") onClose();
  }, [status.status]);

  return (
    <Modal onClose={onClose} open={open}>
      <Styled.DeleteAccountModal>
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <TextFieldPassword
              label="Password"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        {status.error && <ErrorMessage message={status.message} />}

        <button
          onClick={onDeleteAccount}
          disabled={status.loading}
          className="delete-account__btn"
        >
          ანგარიშის წაშლა
        </button>

        {status.loading && <RelativeSpinner />}
      </Styled.DeleteAccountModal>
    </Modal>
  );
};

export default DeleteAccountModal;
