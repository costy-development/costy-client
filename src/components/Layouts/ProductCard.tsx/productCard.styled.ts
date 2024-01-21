import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  cursor: text;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  .product-title {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  .product-card__actions {
    position: absolute;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    button:last-child {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
