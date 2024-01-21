import { useState } from "react";

import { emailStore } from "@/store/dashboard";
import { useEmailQuery } from "@/hooks/api/email";
import { TemplateOneSchema } from "@/utils/validations/email/emailValidation";

import EmailError from "./components/EmailError";
import * as Styled from "./styles/emailTemplates.styled";

const TemplateOne: React.FC = () => {
  const { onSendTemplateOne } = useEmailQuery();

  const [revalidate, setRevalidate] = useState(false);
  const [errors, setErrors] = useState<
    Array<{ message: string; path: string | number }>
  >([]);

  const emails = emailStore.use.recipients();
  const isSelectedAll = emailStore.use.isSelectedAll();

  const onSend = () => {
    const title = document.querySelector(".title")?.textContent;
    const subTitle = document.querySelector(".sub-title")?.textContent;
    const message = document.querySelector(".message")?.textContent;

    const result = TemplateOneSchema.safeParse({
      title,
      emails,
      message,
      subTitle,
      isSelectedAll,
    });

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        path: issue.path[0],
        message: issue.message,
      }));

      setErrors(errors);
      setRevalidate(true);
    } else {
      onSendTemplateOne(result.data);
    }
  };

  return (
    <>
      <Styled.TemplateOne>
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

              <div className="template-one__form form">
                <div
                  contentEditable
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: "News in January: New Tool Release",
                  }}
                />

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
      </Styled.TemplateOne>

      <EmailError
        errors={errors}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />
    </>
  );
};

export default TemplateOne;
