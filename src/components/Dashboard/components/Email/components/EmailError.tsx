import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import * as Styled from "./styles/emailError.styled.ts";
import { Modal } from "@/components/Layouts";

type EmailErrorT = {
  revalidate: boolean;
  setRevalidate: React.Dispatch<React.SetStateAction<boolean>>;
  errors: Array<{ message: string; path: string | number }>;
};

const EmailError: React.FC<EmailErrorT> = ({
  errors,
  revalidate,
  setRevalidate,
}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    setRevalidate(false);
  };

  useEffect(() => {
    if (revalidate) setOpen(true);
  }, [revalidate]);

  return (
    <Modal open={open} onClose={onClose} showCloseBtn={true}>
      <Styled.EmailError>
        <span className="email-error__title">დაფიქსირდა შეცდომა</span>
        {errors.map((error) => (
          <div className="email-error__item" key={uuid()}>
            <p>
              Path:&nbsp;
              <strong>{error.path}</strong>
            </p>
            <p>{error.message}</p>
          </div>
        ))}
      </Styled.EmailError>
    </Modal>
  );
};

export default EmailError;
