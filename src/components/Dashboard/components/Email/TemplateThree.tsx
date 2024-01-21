import { useState } from "react";
import { v4 as uuid } from "uuid";

import { emailStore } from "@/store/dashboard";
import { useEmailQuery } from "@/hooks/api/email";
import { TemplateThreeSchema } from "@/utils/validations/email/emailValidation";

import EmailError from "./components/EmailError";
import * as Styled from "./styles/emailTemplates.styled";
import TemplateListedItem from "./components/TemplateListedItem";

const TemplateThree: React.FC = () => {
  const [listFields, setListFields] = useState<
    Array<{ _id: string; value: string }>
  >([{ _id: uuid(), value: "Lorem ipsum dolor sit amet" }]);

  const onAddField = (e: React.MouseEvent) => {
    e.stopPropagation();
    setListFields((prev) => [...prev, { _id: uuid(), value: "" }]);
  };

  const onRemoveField = (fieldId: string) => {
    if (listFields.length === 1) {
      setListFields(() => [{ _id: uuid(), value: "" }]);
    } else {
      setListFields((prev) => prev.filter((field) => field._id !== fieldId));
    }
  };

  const { onSendTemplateThree } = useEmailQuery();

  const [revalidate, setRevalidate] = useState(false);
  const [errors, setErrors] = useState<
    Array<{ message: string; path: string | number }>
  >([]);

  const emails = emailStore.use.recipients();
  const isSelectedAll = emailStore.use.isSelectedAll();

  const onSend = () => {
    const title = document.querySelector(".title")?.textContent;
    const list = Array.from(document.querySelectorAll(".list-item")).map(
      (node) => node.textContent
    );

    const result = TemplateThreeSchema.safeParse({
      title,
      list,
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
      onSendTemplateThree(result.data);
    }
  };

  return (
    <>
      <Styled.TemplateThree>
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

              <div className="template-three__form form">
                <div
                  contentEditable
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: "News in January",
                  }}
                />

                <ul className="template-three__list">
                  {listFields.map((field) => (
                    <TemplateListedItem
                      key={field._id}
                      field={field}
                      onAddField={onAddField}
                      onRemoveField={onRemoveField}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onSend} className="send-email__btn">
          გაგზავნა
        </button>
      </Styled.TemplateThree>

      <EmailError
        errors={errors}
        revalidate={revalidate}
        setRevalidate={setRevalidate}
      />
    </>
  );
};

export default TemplateThree;
