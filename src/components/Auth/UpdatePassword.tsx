/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useUpdatePasswordQuery } from "@/hooks/api/auth";

import * as Form from "@/components/Layouts/Form";
import { ErrorMessage, RelativeSpinner } from "@/components/Layouts";

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const emailIsConfirmed = state?.emailIsConfirmed;

  const [isAvailable, setIsAvailable] = useState(false);

  const { form, onUpdatePassword, status } = useUpdatePasswordQuery();

  useEffect(() => {
    if (!emailIsConfirmed) return navigate(PATHS.auth_page);
    setIsAvailable(true);
  }, [emailIsConfirmed]);

  return isAvailable ? (
    <div className="auth-wrapper">
      <span className="auth-title">პაროლის აღდგენა</span>

      <div className="auth-center">
        <form className="auth-center__form">
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <Form.TextFieldPassword
                fieldProps={field}
                label="პაროლი"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />

          <Controller
            control={form.control}
            name="confirm_password"
            render={({ field, fieldState: { error } }) => (
              <Form.TextFieldPassword
                fieldProps={field}
                label="დაადასტურეთ პაროლი"
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
            onClick={onUpdatePassword}
            className="submit-btn"
          >
            აღადგინე
          </button>
        </div>
      </div>

      <div />
    </div>
  ) : (
    <></>
  );
};

export default UpdatePassword;
