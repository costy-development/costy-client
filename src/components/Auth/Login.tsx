import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSignInQuery } from "@/hooks/api/auth";

import * as Form from "@/components/Layouts/Form";
import { ErrorMessage, RelativeSpinner } from "@/components/Layouts";

const Login: React.FC = () => {
  const { form, onAuth, status } = useSignInQuery();

  return (
    <div className="auth-wrapper">
      <span className="auth-title">შესვლა</span>

      <div className="auth-center">
        <form className="auth-center__form">
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
                label="პაროლი"
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
            onClick={onAuth}
            disabled={status.loading}
            className="submit-btn right"
          >
            შესვლა
          </button>
        </div>
      </div>

      <div className={`auth-footer ${status.loading ? "disabled" : ""}`}>
        <div>
          ახალი ხართ ? &nbsp;
          <Link to={PATHS.auth_register_page}>
            <strong>შექმენი ანგარიში</strong>
          </Link>
        </div>

        <Link to={PATHS.auth_forgot_password_page}>
          <strong>დაგავიწყდათ პაროლი ?</strong>
        </Link>
      </div>
    </div>
  );
};

export default Login;
