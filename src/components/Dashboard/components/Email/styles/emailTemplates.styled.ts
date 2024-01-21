import styled from "styled-components";
import { templateCommon } from "./emailTemplatesCommon.styled";

export const TemplateOne = styled.div`
  ${templateCommon};

  .template-circle {
    background-image: url("/images/calculator.webp");
    background-repeat: no-repeat;
    background-position: 120% 195%;
    background-size: 70%;
  }

  .template-one__form {
    width: 95%;
    height: max-content;
    background-color: rgba(299, 299, 299, 0.5);
    backdrop-filter: blur(3px);
  }

  .template-one__form .title {
    color: #404040;
    margin-top: 20px;
  }

  .template-one__form .sub-title {
    margin-top: 25px;
    color: #1f1ade;
  }

  .template-one__form .message {
    margin-top: 10px;
    color: #404040;
  }

  @media (max-width: 31.25em) {
    .sub-title {
      margin-top: 5px;
    }

    .message {
      margin-top: 5px;
    }
  }
`;

export const TemplateTwo = styled.div`
  ${templateCommon};

  .template-circle {
    background-image: url("/images/ship.webp");
    background-repeat: no-repeat;
    background-position: 60% 110%;
    background-size: 95%;
  }

  .template-two__form {
    height: 77%;
  }

  .titles-wrapper {
    height: 75%;
  }

  .title {
    color: #1f1ade;
    margin-top: 20px;
  }

  .title.secondary {
    color: #404040;
  }

  .sub-title {
    width: 70%;
    color: #fff;
  }

  .message {
    width: 85%;
    margin-top: 10px;
    color: #fff;
    font-size: 0.85em;
  }

  @media (max-width: 31.25em) {
    .template-two__form {
      width: 95%;
      height: max-content;
    }

    .sub-title {
      bottom: 28%;
      width: 75%;
      font-size: 1.05em;
      color: #404040;
      display: none;
    }

    .message {
      font-size: 0.8em;
    }
  }
`;

export const TemplateThree = styled.div`
  ${templateCommon};

  .template-circle {
    background-image: url("/images/ship.webp");
    background-repeat: no-repeat;
    background-position: 150px 160%;
    background-size: 110%;
  }

  .template-three__form {
    height: 77%;
    width: max-content;
  }

  .title {
    color: #1f1ade;
    margin-top: 20px;
  }

  .template-three__list {
    margin-top: 20px;
  }

  .list-item {
    margin-left: 20px;
    list-style: disc;
    font-weight: 600;
    color: #404040;
    font-size: 20px;
    margin-top: 10px;
  }

  .list-item::marker {
    color: #1f1ade;
    font-size: 25px;
  }

  @media (max-width: 31.25em) {
    .template-three__form {
      width: 85%;
      height: max-content;
    }

    .template-three__list {
      margin-top: 5px;
    }

    .list-item {
      font-size: 14px;
    }
  }
`;

export const TemplateFour = styled.div`
  ${templateCommon};

  .template-circle {
    background-image: url("/images/join-us.webp");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 65%;
  }

  .template-four__form {
    width: 65%;
    margin-top: 56%;
  }

  .title {
    width: 100%;
    color: #1f1ade;
  }

  @media (max-width: 31.25em) {
    .title {
      width: 70%;
    }
  }
`;
