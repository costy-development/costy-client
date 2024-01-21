import {
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
  DeleteAccountArgsT,
} from "@/interface/db/auth.types";
import { UserT } from "@/interface/db/user.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type AuthStateT = {
  status: LoadingStatusT;
  user: UserT;
};

type AuthActionsT = {
  login: (args: SignInArgsT) => Promise<void>;
  register: (args: SignUpArgsT) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (args: ForgotPasswordArgsT) => Promise<void>;
  confirmEmail: (args: ConfirmEmailArgsT) => Promise<void>;
  updatePassword: (args: UpdatePasswordArgsT) => Promise<void>;
  deleteAccount: (args: DeleteAccountArgsT) => Promise<void>;
  cleanUpStatus: () => void;
};

type AuthStoreT = AuthStateT & AuthActionsT;

export type { AuthStoreT, AuthStateT };
