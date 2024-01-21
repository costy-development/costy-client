import { useState } from "react";

import { emailStore } from "@/store/dashboard";
import { useEmailQuery } from "@/hooks/api/email";
import { TemplateTwoSchema } from "@/utils/validations/email/emailValidation";

import EmailError from "./components/EmailError";
import * as Styled from "./styles/emailTemplates.styled";

const TemplateTwo: React.FC = () => {
  const { onSendTemplateTwo } = useEmailQuery();

  const [revalidate, setRevalidate] = useState(false);
  const [errors, setErrors] = useState<
    Array<{ message: string; path: string | number }>
  >([]);

  const emails = emailStore.use.recipients();
  const isSelectedAll = emailStore.use.isSelectedAll();

  const onSend = () => {
    const title = document.querySelector(".title")?.textContent;
    const titleSecondary =
      document.querySelector(".title.secondary")?.textContent;
    const subTitle = document.querySelector(".sub-title")?.textContent;
    const message = document.querySelector(".message")?.textContent;

    const result = TemplateTwoSchema.safeParse({
      title,
      emails,
      message,
      subTitle,
      isSelectedAll,
      titleSecondary,
    });

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        message: issue.message,
        path: issue.path[0],
      }));

      setErrors(errors);
      setRevalidate(true);
    } else {
      onSendTemplateTwo(result.data);
    }
  };

  return (
    <>
      <Styled.TemplateTwo>
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

              <div className="template-two__form form">
                <div className="titles-wrapper">
                  <div
                    contentEditable
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: "News in January",
                    }}
                  />

                  <div
                    contentEditable
                    className="title secondary"
                    dangerouslySetInnerHTML={{
                      __html: "New Tool Release",
                    }}
                  />
                </div>

                <div
                  contentEditable
                  className="sub-title"
                  dangerouslySetInnerHTML={{
                    __html: "Lorem ipsum dolor sit amet",
                  }}
                />

                <div
                  contentEditable
                  className="message"
                  dangerouslySetInnerHTML={{
                    __html:
                      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={onSend} className="send-email__btn">
          გაგზავნა
        </button>
      </Styled.TemplateTwo>

      <EmailError
        errors={errors}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />
    </>
  );
};

export default TemplateTwo;
