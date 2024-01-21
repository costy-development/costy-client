import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useRegistrationQuery } from "@/hooks/api/auth";

import * as Form from "@/components/Layouts/Form";
import { ErrorMessage, RelativeSpinner } from "@/components/Layouts";

const Register: React.FC = () => {
  const { form, onRegistration, status } = useRegistrationQuery();

  return (
    <div className="auth-wrapper">
      <span className="auth-title">რეგისტრაცია</span>

      <div className="auth-center">
        <form className="auth-center__form">
          <Controller
            control={form.control}
            name="username"
            render={({ field, fieldState: { error } }) => (
              <Form.TextField
                fieldProps={field}
                label="სრული სახელი"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <Form.TextField
                fieldProps={field}
                label="ელ-ფოსტა"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <Form.TextFieldPassword
                fieldProps={field}
                key="password"
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
                key="password"
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
            onClick={onRegistration}
            className="submit-btn right"
          >
            რეგისტრაცია
          </button>
        </div>
      </div>

      <div className={`auth-footer ${status.loading ? "disabled" : ""}`}>
        <div>
          გაქვთ ანგარიში ? &nbsp;
          <Link to={PATHS.auth_login_page}>
            <strong>შესვლა</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
