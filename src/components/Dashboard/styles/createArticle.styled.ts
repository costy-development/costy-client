import styled from "styled-components";
import { scrollbar } from "@/styles/utils/utils";

export const CreateArticle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  min-height: 100vh;

  .editor-wrapper {
    width: 100rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div:has(textarea[name="title"]) {
    textarea[name="title"] {
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
      border: none;
      font-size: ${({ theme }) => theme.fontSize.h3};
      outline: none;
      min-height: 10rem;
      padding: 0.5rem 1rem;

      &::-webkit-scrollbar {
        display: none;
      }

      &::placeholder {
        padding-top: 1rem;
      }
    }
  }

  [data-error-message] {
    margin-top: 2rem;
  }

  .quill {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .quill .ql-toolbar.ql-snow,
  .quill .ql-container.ql-snow {
    overflow: hidden;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }

  .quill .ql-container.ql-snow {
    padding: 1rem;
  }

  .quill .ql-container.ql-snow .ql-editor {
    height: 63vh;
    overflow-y: auto;
    ${scrollbar};

    p,
    p > * {
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    p:has(img) {
      width: 90%;
      border-radius: 0.5rem;
      margin: 3rem auto;

      img {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }

    iframe {
      border-radius: 0.5rem;
      margin: 3rem auto;
      width: 90%;
      aspect-ratio: 16/9;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
    }
  }

  .publish-btn {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 1.4rem;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
  }
`;
