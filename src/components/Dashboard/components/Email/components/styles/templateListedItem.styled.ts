import styled from "styled-components";

export const TemplateListedItem = styled.div`
  position: relative;

  .list-item {
    margin-left: 2rem;
    list-style: disc;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_dark};
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding-right: 8.5rem;

    &::marker {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 25px;
    }
  }

  .list-item__actions {
    position: absolute;
    right: 0;
    top: 0.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;

    button {
      font-size: 25px;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      transition: border-color 0.3s ease;

      svg {
        transition: stroke 0.3s ease;
        stroke: ${({ theme }) => theme.colors.gray_shade};
      }

      &:hover {
        border-color: ${({ theme }) => theme.colors.blue};

        svg {
          stroke: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }

  &:hover .list-item__actions {
    opacity: 1;
    pointer-events: all;
  }

  &:has(.list-item:focus) .list-item__actions,
  &:has(.list-item:focus-within) .list-item__actions {
    opacity: 0;
    pointer-events: none;
  }

  &:has(.list-item:focus) .list-item,
  &:has(.list-item:focus-within) .list-item {
    padding: 0;
  }
`;
