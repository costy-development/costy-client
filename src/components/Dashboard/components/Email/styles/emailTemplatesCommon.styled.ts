import { css } from "styled-components";

export const templateCommon = css`
  .container {
    width: 100%;
    max-width: 800px;
    height: 100%;
    padding: 30px;
    overflow-x: hidden;
    background: url("/icons/bg-line.svg");
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .template {
    padding: 30px;
    margin: 0 auto;
    width: 700px;
    height: 700px;
    overflow: hidden;
  }

  .template-circle {
    width: 90%;
    height: 90%;
    background-color: #f9f9f9;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid #999;
  }

  .app-logo {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
  }

  .form {
    max-width: 470px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 3em;
    line-height: 1.2;
    font-weight: 700;
    margin: 0 auto;
    word-wrap: break-word;
    text-wrap: balance;
    -moz-text-wrap: balance;
    -webkit-text-wrap: balance;
    -ms-text-wrap: balance;
  }

  .sub-title {
    text-align: center;
    font-size: 1.6em;
    font-weight: 600;
    margin: 0 auto;
    word-wrap: break-word;
    text-wrap: balance;
    -moz-text-wrap: balance;
    -webkit-text-wrap: balance;
  }

  .message {
    text-align: center;
    font-weight: 600;
    font-size: 1.1em;
    margin: 0 auto;
    word-wrap: break-word;
    text-wrap: balance;
    -moz-text-wrap: balance;
    -webkit-text-wrap: balance;
  }

  .send-email__btn {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 3rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    border-radius: 0.5rem;
  }

  @media (max-width: 56.25em) {
    .container {
      padding: 0;
    }

    .template {
      width: 100%;
      height: 100vw;
    }
  }

  @media (max-width: 31.25em) {
    .title {
      font-size: 1.5em;
      line-height: 1.2;
    }

    .sub-title {
      font-size: 1.2em;
    }

    .message {
      font-size: 0.9em;
    }
  }
`;
