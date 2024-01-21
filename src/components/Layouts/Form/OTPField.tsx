import OtpInput from "react-otp-input";

import * as Styled from "./form.styled";
import { ErrorMessage } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";

type OTPFieldT = {
  message: string;
  label?: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
};

const OTPField: React.FC<OTPFieldT> = ({
  fieldProps,
  hasError,
  message,
  label,
}) => {
  return (
    <Styled.OTPField>
      {label && <label htmlFor={fieldProps.name}>{label}</label>}

      <OtpInput
        value={fieldProps.value}
        onChange={fieldProps.onChange}
        numInputs={6}
        containerStyle="otp-container"
        // renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} placeholder="*" />}
      />

      {hasError && <ErrorMessage message={message} />}
    </Styled.OTPField>
  );
};

export default OTPField;
