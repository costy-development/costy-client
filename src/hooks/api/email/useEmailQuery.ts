import { emailStore } from "@/store/dashboard";
import { NODE_MODE } from "@/config/env";

import {
  SendTemplateOneArgsT,
  SendTemplateTwoArgsT,
  SendTemplateThreeArgsT,
  SendTemplateFourArgsT,
} from "@/interface/db/email.types";

export default function useConfirmEmailQuery() {
  const sendTemplateOne = emailStore.use.sendTemplateOne();
  const sendTemplateTwo = emailStore.use.sendTemplateTwo();
  const sendTemplateThree = emailStore.use.sendTemplateThree();
  const sendTemplateFour = emailStore.use.sendTemplateFour();

  const onSendTemplateOne = async (args: SendTemplateOneArgsT) => {
    try {
      await sendTemplateOne(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onSendTemplateTwo = async (args: SendTemplateTwoArgsT) => {
    try {
      await sendTemplateTwo(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onSendTemplateThree = async (args: SendTemplateThreeArgsT) => {
    try {
      await sendTemplateThree(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onSendTemplateFour = async (args: SendTemplateFourArgsT) => {
    try {
      await sendTemplateFour(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return {
    onSendTemplateOne,
    onSendTemplateTwo,
    onSendTemplateThree,
    onSendTemplateFour,
  };
}
