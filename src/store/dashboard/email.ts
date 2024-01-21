import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createSelectors, getStatus } from "@/store/helpers";
import { axiosPrivateQuery } from "@/services/axios";

import {
  SendTemplateOneArgsT,
  SendTemplateTwoArgsT,
  SendTemplateThreeArgsT,
  SendTemplateFourArgsT,
} from "@/interface/db/email.types";

import {
  EmailStateT,
  EmailStoreT,
} from "@/interface/store/dashboard/email.store.types";

const initialState: EmailStateT = {
  isSelectedAll: false,
  recipients: [],
  status: getStatus("IDLE"),
};

const useEmailStore = create<EmailStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      // LOCALS

      setIsSelectedAll: (isSelectedAll: boolean) => {
        set(() => ({ isSelectedAll, recipients: initialState.recipients }));
      },

      deSelectAllRecipients: () => {
        set(() => ({
          isSelectedAll: false,
          recipients: initialState.recipients,
        }));
      },

      addRecipient(recipient: string) {
        const currentRecipients = get().recipients;

        const updatedRecipients = currentRecipients.includes(recipient)
          ? currentRecipients.filter((email) => email !== recipient)
          : Array.from(new Set([...currentRecipients, recipient]));

        set(() => ({ recipients: updatedRecipients }));
      },

      cleanUpEmails() {
        set(() => ({
          isSelectedAll: initialState.isSelectedAll,
          recipients: initialState.recipients,
        }));
      },

      // API

      sendTemplateOne: async (args: SendTemplateOneArgsT) => {
        try {
          const isSelectedAll = get().isSelectedAll;

          const credentials = {
            title: args.title,
            subTitle: args.subTitle,
            message: args.message,
            emails: args.emails,
            isSelectedAll,
          };

          set(() => ({ status: getStatus("PENDING") }));
          await axiosPrivateQuery.post("/dashboard/email/one", credentials);
          set(() => ({ status: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },

      sendTemplateTwo: async (args: SendTemplateTwoArgsT) => {
        try {
          const isSelectedAll = get().isSelectedAll;

          const credentials = {
            title: args.title,
            titleSecondary: args.titleSecondary,
            subTitle: args.subTitle,
            message: args.message,
            emails: args.emails,
            isSelectedAll,
          };

          set(() => ({ status: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/dashboard/email/two", credentials);

          set(() => ({ status: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },

      sendTemplateThree: async (args: SendTemplateThreeArgsT) => {
        try {
          const isSelectedAll = get().isSelectedAll;

          const credentials = {
            title: args.title,
            list: args.list,
            emails: args.emails,
            isSelectedAll,
          };

          set(() => ({ status: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/dashboard/email/three", credentials);

          set(() => ({ status: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },

      sendTemplateFour: async (args: SendTemplateFourArgsT) => {
        try {
          const isSelectedAll = get().isSelectedAll;

          const credentials = {
            title: args.title,
            emails: args.emails,
            isSelectedAll,
          };

          set(() => ({ status: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/dashboard/email/four", credentials);

          set(() => ({ status: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },
    }))
  )
);

export default createSelectors(useEmailStore);
