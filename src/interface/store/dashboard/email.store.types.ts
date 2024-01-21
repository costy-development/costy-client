import { LoadingStatusT } from "../common.types";

import {
  SendTemplateOneArgsT,
  SendTemplateTwoArgsT,
  SendTemplateThreeArgsT,
  SendTemplateFourArgsT,
} from "@/interface/db/email.types";

type EmailStateT = {
  recipients: Array<string>;
  isSelectedAll: boolean;
  status: LoadingStatusT;
};

type EmailActionsT = {
  // LOCALS
  deSelectAllRecipients: () => void;
  addRecipient: (recipient: string) => void;
  setIsSelectedAll: (isSelected: boolean) => void;
  cleanUpEmails: () => void;
  // API
  sendTemplateOne: (args: SendTemplateOneArgsT) => Promise<void>;
  sendTemplateTwo: (args: SendTemplateTwoArgsT) => Promise<void>;
  sendTemplateThree: (args: SendTemplateThreeArgsT) => Promise<void>;
  sendTemplateFour: (args: SendTemplateFourArgsT) => Promise<void>;
};

type EmailStoreT = EmailStateT & EmailActionsT;

export type { EmailStateT, EmailStoreT };
