import styled from "styled-components";

export const DeleteAccountModal = styled.form`
  width: 40rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  position: relative;

  .delete-account__btn {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    width: 100%;
    border-radius: 0.5rem;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
