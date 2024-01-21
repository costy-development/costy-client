import styled from "styled-components";

export const AsideActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .email-form__aside-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .select-btn {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;
