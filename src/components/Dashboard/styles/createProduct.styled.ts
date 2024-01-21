import styled from "styled-components";

export const CreateProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .add-product__title {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 700;
  }

  .product-form {
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 5rem;
    border-radius: 3rem;
    box-shadow: ${({ theme }) => theme.boxShadow.space_sm};
    position: relative;
  }

  .add-product__confirm-btn {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.25rem;
    border-radius: 1rem;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
