import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .products-header {
    position: sticky;
    z-index: 9;
    top: 0rem;
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem 3rem;
    box-shadow: ${({ theme }) => theme.boxShadow.bottom_right_sm};
    display: flex;
    align-items: center;
    gap: 4rem;

    .add-product__btn {
      width: 19rem;
      padding: 1rem 3rem;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0.5rem;
      transition: all 0.2s ease-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.blue_shade};
      }
    }
  }
`;
