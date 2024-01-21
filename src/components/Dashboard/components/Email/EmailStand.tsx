import { v4 as uuid } from "uuid";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { Modal } from "@/components/Layouts";
import * as Styled from "./styles/emailStand.styled";

type EmailStandT = {};

const emailTemplates = [
  {
    path: "?email_template=template_one",
    modelImg: "/images/template-one.webp",
  },
  {
    path: "?email_template=template_two",
    modelImg: "/images/template-two.webp",
  },
  {
    path: "?email_template=template_three",
    modelImg: "/images/template-three.webp",
  },
  {
    path: "?email_template=template_four",
    modelImg: "/images/template-four.webp",
  },
];

const EmailStand: React.FC<EmailStandT> = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  const isSelectingEmail = hash === "#email_templates";

  const onClose = () => navigate(-1);

  return (
    <Styled.EmailStand>
      <Link to="#email_templates" className="template__select-btn">
        აირჩიე იმეილის შაბლონი
      </Link>

      <Modal open={isSelectingEmail} showCloseBtn={true} onClose={onClose}>
        <Styled.EmailTemplates>
          {emailTemplates.map((template) => (
            <Link
              key={uuid()}
              replace={true}
              to={`${PATHS.dashboard_email_page}${template.path}`}
            >
              <figure>
                <img
                  src={template.modelImg}
                  alt="template"
                  title="template"
                  loading="eager"
                  width={400}
                  height={400}
                />
              </figure>
            </Link>
          ))}
        </Styled.EmailTemplates>
      </Modal>
    </Styled.EmailStand>
  );
};

export default EmailStand;
