import styled from "styled-components";
import { scaleUpBeat } from "@/styles/utils/animations";

export const Auth = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .auth__circle-container {
    width: ${({ theme }) => theme.circle.parent_diameter};
    height: ${({ theme }) => theme.circle.parent_diameter};
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow.circle_shadow};
    background: ${({ theme }) => theme.colors.bg};
    animation: ${scaleUpBeat()} 1s ease forwards;
    pointer-events: all;
    position: relative;
    z-index: 1;
  }

  .auth-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 13rem 5rem;
  }

  .auth-title {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      transform: rotate(-90deg);
      line-height: 1;
      font-size: 32px;

      svg {
        transition: all 0.3s ease;
        fill: ${({ theme }) => theme.colors.text};

        &:hover {
          fill: ${({ theme }) => theme.colors.blue_secondary};
        }
      }
    }
  }

  .auth-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    width: 100%;

    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    &__socials {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      width: 100%;

      &-list {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        figure {
          cursor: pointer;
        }
      }

      .submit-btn {
        background-color: ${({ theme }) => theme.colors.blue_secondary};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 0.5rem;
        transition: all 0.3s ease;
        margin: 0 auto;
        padding: 1.5rem 8rem;
        width: 100%;

        &:disabled {
          opacity: 0.5;
        }

        &.right {
          margin-left: auto;
          margin-right: 1rem;
          padding: 1.5rem 8rem;
          width: max-content;
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.blue_shade};
        }
      }
    }
  }

  .auth-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    &.disabled {
      opacity: 0.5;
    }

    a {
      color: ${({ theme }) => theme.colors.blue_secondary};
      text-decoration: underline;
    }
  }
`;
