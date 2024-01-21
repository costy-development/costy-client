import styled, { css } from "styled-components";
import { scrollbar } from "@/styles/utils/utils";

const commonStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: 600;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
    letter-spacing: 0.3px;
  }

  p {
    padding-left: 0.75rem;
  }

  .field__input-wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
    display: flex;
    align-items: stretch;

    .text-field__input {
      outline: none;
      border: none;
      padding: 1rem 0.75rem;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray_dark};
    }

    .text-field__adornment {
      min-height: 100%;
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 0.75rem;
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const TextField = styled.div`
  ${commonStyles};
`;

export const TextareaField = styled.div`
  ${commonStyles};

  .text-field__input {
    resize: none;
    ${scrollbar};
  }
`;

export const OTPField = styled.div`
  ${commonStyles};

  .otp-container {
    display: flex;
    justify-content: space-between;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem !important;
      height: 5rem;
      border-radius: 0.5rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;
