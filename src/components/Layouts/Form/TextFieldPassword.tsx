import { useState } from "react";

import TextField from "./TextField";
import EyeButton from "./components/EyeButton";

import { HookFormTextFieldT } from "@/interface/form.types";

type TextFieldPasswordT = {
  message: string;
  label?: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
};

const TextFieldPassword: React.FC<TextFieldPasswordT> = ({
  label,
  message,
  hasError,
  fieldProps,
}) => {
  const [inputType, setInputType] = useState<"text" | "password">("password");

  const onToggleType = (toggle: boolean) =>
    setInputType(() => (toggle ? "password" : "text"));

  return (
    <TextField
      fieldProps={fieldProps}
      hasError={hasError}
      message={message}
      label={label}
      type={inputType}
      InputAdornment={
        <EyeButton shown={inputType === "password"} toggleType={onToggleType} />
      }
    />
  );
};

export default TextFieldPassword;
