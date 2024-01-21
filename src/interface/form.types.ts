import { RefCallBack } from "react-hook-form";

type HookFormTextFieldT = {
  name: string;
  onBlur?: (e: React.FocusEvent) => void;
  onChange: (e: React.ChangeEvent | string) => void;
  ref?: RefCallBack;
  value: string;
  disabled?: boolean;
};

export type { HookFormTextFieldT };
