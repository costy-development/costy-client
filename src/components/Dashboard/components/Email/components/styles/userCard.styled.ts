import styled from "styled-components";

export const UserCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .user-card__body {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease-out;
    cursor: pointer;

    &-fig {
      width: 5rem;
      height: 5rem;
      overflow: hidden;
      border-radius: 100%;

      img {
        width: 100%;
        min-width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    }

    &-details {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      span:first-child {
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.gray_dark};
        font-weight: 500;
      }

      span:last-child {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }
  }
`;
