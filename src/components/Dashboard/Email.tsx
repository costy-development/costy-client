import { lazy, Suspense } from "react";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/email.styled";
import { Spinner } from "@/components/Layouts";
import { EmailFormLayout, EmailStand } from "./components/Email";

const TemplateOne = lazy(() => import("./components/Email/TemplateOne"));
const TemplateTwo = lazy(() => import("./components/Email/TemplateTwo"));
const TemplateThree = lazy(() => import("./components/Email/TemplateThree"));
const TemplateFour = lazy(() => import("./components/Email/TemplateFour"));

const templates = {
  template_one: <TemplateOne />,
  template_two: <TemplateTwo />,
  template_three: <TemplateThree />,
  template_four: <TemplateFour />,
};

const Email: React.FC = () => {
  const { getParam } = useSearchParams();
  const template = getParam("email_template");

  const Template = template ? (
    <Suspense fallback={<Spinner />}>
      {templates[template as keyof typeof templates]}
    </Suspense>
  ) : (
    <></>
  );

  return (
    <Styled.Email>
      {template ? (
        <EmailFormLayout>{Template}</EmailFormLayout>
      ) : (
        <EmailStand />
      )}
    </Styled.Email>
  );
};

export default Email;
