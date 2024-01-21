import styled from "styled-components";
import { hyphens, textWrapBalance } from "@/styles/utils/utils";

export const Article = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 3rem;

  .article-title {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    display: inline-block;
    text-align: start;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 3rem;
    ${textWrapBalance};
  }

  .article-head {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;

    button {
      margin-left: auto;
      color: ${({ theme }) => theme.colors.red};
    }

    a svg {
      font-size: 26px;
    }
  }

  .ql-container.ql-bubble {
    .ql-clipboard,
    .ql-tooltip {
      display: none;
    }

    .ql-editor {
      h1 {
        display: inline-block;
        padding-bottom: 0.5rem;
      }

      p:has(img) {
        width: max-content;
        max-width: 100%;
        max-height: 60vh;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        margin: 3rem auto;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      iframe {
        width: 75%;
        max-height: 60vh;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        margin: 3rem auto;
      }

      p,
      p > * {
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 1.5;
        letter-spacing: 0.5px;
        pointer-events: none !important;
        color: ${({ theme }) => theme.colors.text} !important;
        ${hyphens};
      }

      p > span {
        /* background: none !important; */
      }

      blockquote {
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.gray_dark};
        width: max-content;
        display: inline-block;
        padding: 0.3rem;
        padding-left: 0.5rem;
        border-radius: 0.2rem;
        border-left: 2px solid ${({ theme }) => theme.colors.gray_dark};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin: 0.5rem 0;
        font-size: ${({ theme }) => theme.fontSize.sm};
        letter-spacing: 0.5px;
      }

      pre {
        color: #fff;
        background-color: #1b2024;
        border: 1px solid ${({ theme }) => theme.colors.gray_shade};
        padding: 2rem;
        border-radius: 0.5rem;
      }
    }
  }
`;
