import { create } from "zustand";
import { AxiosResponse } from "axios";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

import { LocaleStorage as s } from "@/utils";
import { RouterHistory } from "@/config/config";
import { PATHS, PRIVATE_ROUTES } from "@/config/paths";
import { createSelectors, getStatus } from "./helpers";
import { axiosPublicQuery, axiosPrivateQuery } from "@/services/axios";

import * as AuthAPI_T from "@/interface/db/auth.types";
import { AuthStoreT, AuthStateT } from "@/interface/store/auth.store.types";

const initialState: AuthStateT = {
  status: {
    status: "IDLE",
    loading: false,
    error: false,
    message: "",
  },

  user: {
    _id: "",
    avatar: "",
    email: "",
    username: "",
  },
};

const useAuthStore = create<AuthStoreT>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...initialState,

          cleanUpStatus: () => {
            set(() => ({ status: initialState.status }));
          },

          login: async (args: AuthAPI_T.SignInArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signin`, args);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          register: async (args: AuthAPI_T.SignUpArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signup`, args);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          logout: async () => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPrivateQuery.post(`/auth/logout`);

              s.removeJWT();

              set(() => ({
                user: initialState.user,
                status: getStatus("SUCCESS"),
              }));

              if (
                PRIVATE_ROUTES.some((route) =>
                  RouterHistory.location.pathname.includes(route)
                )
              )
                RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          forgotPassword: async (args: AuthAPI_T.ForgotPasswordArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.patch("/auth/forgot-password", args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.auth_confirm_email_page, {
                state: { isProcessingPasswordUpdate: true },
              });
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          confirmEmail: async (args: AuthAPI_T.ConfirmEmailArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.put("/auth/forgot-password", args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.auth_update_password_page, {
                state: { emailIsConfirmed: true },
              });
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          updatePassword: async (args: AuthAPI_T.UpdatePasswordArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.post("/auth/forgot-password", args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.auth_page);
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          deleteAccount: async (args: AuthAPI_T.DeleteAccountArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPrivateQuery.post(`/users/${args.userId}/delete`, {
                password: args.password,
              });

              s.removeJWT();

              set(() => ({
                user: initialState.user,
                status: getStatus("SUCCESS"),
              }));

              if (
                PRIVATE_ROUTES.some((route) =>
                  RouterHistory.location.pathname.includes(route)
                )
              )
                RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = error.response?.data?.message || error?.message;
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },
        }),
        {
          name: "costy_user",
          partialize: (state) => ({ user: state.user }),
        }
      )
    )
  )
);

export default createSelectors(useAuthStore);
