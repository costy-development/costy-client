type SendTemplateOneArgsT = {
  title: string;
  subTitle: string;
  message: string;
  emails: Array<string>;
};

type SendTemplateTwoArgsT = {
  title: string;
  titleSecondary: string;
  subTitle: string;
  message: string;
  emails: Array<string>;
};

type SendTemplateThreeArgsT = {
  title: string;
  list: Array<string>;
  emails: Array<string>;
};

type SendTemplateFourArgsT = {
  title: string;
  emails: Array<string>;
};

export type {
  SendTemplateOneArgsT,
  SendTemplateTwoArgsT,
  SendTemplateThreeArgsT,
  SendTemplateFourArgsT,
};
