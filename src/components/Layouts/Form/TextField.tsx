import { ErrorMessage } from "@/components/Layouts";

import * as Styled from "./form.styled";

import { HookFormTextFieldT } from "@/interface/form.types";

type TextFieldT = {
  message: string;
  label?: string;
  hasError: boolean;
  type?: "text" | "password" | "number";
  fieldProps: HookFormTextFieldT;
  InputAdornment?: React.ReactNode;
};

const TextField: React.FC<TextFieldT> = ({
  label,
  message,
  hasError,
  fieldProps,
  type = "text",
  InputAdornment,
}) => {
  return (
    <Styled.TextField>
      <div className="field__input-wrapper">
        <input
          type={type}
          {...fieldProps}
          className="text-field__input"
          placeholder={label ? label : ""}
        />

        {InputAdornment ? (
          <div className="text-field__adornment">{InputAdornment}</div>
        ) : (
          <></>
        )}
      </div>

      {hasError && <ErrorMessage message={message} />}
    </Styled.TextField>
  );
};

export default TextField;
