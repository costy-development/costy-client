import styled from "styled-components";
import { scrollbar } from "@/styles/utils/utils";
import { moveY } from "@/styles/utils/animations";

export const Dropdown = styled.div<{
  $dropdown_max_height: number;
  $dropdown_min_width: number;
}>`
  position: relative;

  .dropdown__trigger-btn {
    position: relative;
    z-index: 99;

    &.active {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }

  .dropdown__backdrop {
    position: fixed;
    inset: 0;
    z-index: 999;
  }

  .dropdown__window-wrapper {
    position: absolute;
    z-index: 9999;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.gray_dark};
    background: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    padding: 0.75rem;
    min-width: ${({ $dropdown_min_width }) => `${$dropdown_min_width / 10}rem`};
    top: calc(100% + 1rem);
    left: 0;
    animation: ${moveY(15)} 0.2s ease-out;
    box-shadow: ${({ theme }) => theme.boxShadow.bottom_right_lg};

    .dropdown__window {
      overflow-y: auto;
      ${scrollbar};
      scroll-behavior: smooth;
      max-height: ${({ $dropdown_max_height }) =>
        `${$dropdown_max_height / 10}rem`};
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      &-item {
        cursor: pointer;
        font-size: ${({ theme }) => theme.fontSize.base};
        border-radius: 0.4rem;
        padding: 0.5rem 0.75rem;
        transition: all 0.3s ease-out;

        &:hover {
          color: ${({ theme }) => theme.colors.blue};
        }

        &.active {
          color: ${({ theme }) => theme.colors.blue};
          font-weight: 600;
        }

        &.danger {
          color: ${({ theme }) => theme.colors.red};

          &:hover {
            background-color: ${({ theme }) => theme.colors.red};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
`;
