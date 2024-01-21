import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useForgotPasswordQuery } from "@/hooks/api/auth";

import * as Form from "@/components/Layouts/Form";
import { ErrorMessage, RelativeSpinner } from "@/components/Layouts";

const ForgotPassword: React.FC = () => {
  const { form, onForgotPassword, status } = useForgotPasswordQuery();

  return (
    <div className="auth-wrapper">
      <div className="auth-title">
        <Link to={PATHS.auth_login_page} className="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0" />
          </svg>
        </Link>
        პაროლის აღდგენა
      </div>

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
        </form>

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}

        <div className="auth-center__socials">
          <button
            type="button"
            disabled={status.loading}
            onClick={onForgotPassword}
            className="submit-btn right"
          >
            გაგზავნეთ იმეილი
          </button>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ForgotPassword;
