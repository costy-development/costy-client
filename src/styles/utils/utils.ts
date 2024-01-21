import { css } from "styled-components";

export const themeTransition = css`
  transition: background-color 0.5s ease, color 0.6s ease;
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    display: block;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray_dark : theme.colors.gray_dark};
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2rem;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray : theme.colors.gray_shade};
  }
`;

export const hyphens = css`
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
`;

export const textWrapBalance = css`
  word-wrap: break-word;
  text-wrap: balance;
  -ms-text-wrap: balance;
  -moz-text-wrap: balance;
  -webkit-text-wrap: balance;
`;
