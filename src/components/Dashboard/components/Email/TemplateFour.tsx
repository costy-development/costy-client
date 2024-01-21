import { useState } from "react";

import { emailStore } from "@/store/dashboard";
import { useEmailQuery } from "@/hooks/api/email";
import { TemplateFourSchema } from "@/utils/validations/email/emailValidation";

import EmailError from "./components/EmailError";
import * as Styled from "./styles/emailTemplates.styled";

const TemplateFour: React.FC = () => {
  const { onSendTemplateFour } = useEmailQuery();

  const [revalidate, setRevalidate] = useState(false);
  const [errors, setErrors] = useState<
    Array<{ message: string; path: string | number }>
  >([]);

  const emails = emailStore.use.recipients();
  const isSelectedAll = emailStore.use.isSelectedAll();

  const onSend = () => {
    const title = document.querySelector(".title")?.textContent;

    const result = TemplateFourSchema.safeParse({
      title,
      emails,
      isSelectedAll,
    });

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        message: issue.message,
        path: issue.path[0],
      }));

      setErrors(errors);
      setRevalidate(true);
    } else {
      onSendTemplateFour(result.data);
    }
  };

  return (
    <>
      <Styled.TemplateFour>
        <div className="container">
          <div className="template">
            <div className="template-circle">
              <img
                className="app-logo"
                src="/icons/logo.png"
                alt=""
                width={174}
                height={98}
              />

              <div className="template-four__form form">
                <div
                  contentEditable
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: "News in January",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={onSend} className="send-email__btn">
          გაგზავნა
        </button>
      </Styled.TemplateFour>

      <EmailError
        errors={errors}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />
    </>
  );
};

export default TemplateFour;
