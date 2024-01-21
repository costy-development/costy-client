import styled from "styled-components";

export const EmailError = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;

  .email-error__title {
    color: ${({ theme }) => theme.colors.red};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  .email-error__item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    strong {
      color: ${({ theme }) => theme.colors.gray_dark};
    }

    p:last-child {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
