/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useConfirmEmailQuery } from "@/hooks/api/auth";

import * as Form from "@/components/Layouts/Form";
import { ErrorMessage, RelativeSpinner } from "@/components/Layouts";

const ConfirmEmail: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const isProcessingPasswordUpdate = state?.isProcessingPasswordUpdate;

  const [isAvailable, setIsAvailable] = useState(false);

  const { form, onConfirmEmail, status } = useConfirmEmailQuery();

  useEffect(() => {
    if (!isProcessingPasswordUpdate) return navigate(PATHS.auth_page);
    setIsAvailable(true);
  }, [isProcessingPasswordUpdate]);

  return isAvailable ? (
    <div className="auth-wrapper">
      <span className="auth-title">დაადასტურეთ ელ-ფოსტა</span>

      <div className="auth-center">
        <form className="auth-center__form">
          <Controller
            control={form.control}
            name="pin"
            render={({ field, fieldState: { error } }) => (
              <Form.OTPField
                fieldProps={field}
                label="პინი"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />
        </form>

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}

        <div className="auth-center__socials">
          <button
            type="button"
            disabled={status.loading}
            onClick={onConfirmEmail}
            className="submit-btn"
          >
            დადასტურება
          </button>
        </div>
      </div>
      <div />
    </div>
  ) : (
    <></>
  );
};

export default ConfirmEmail;
