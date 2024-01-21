import styled from "styled-components";

export const Articles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  .articles-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 2rem 3rem;

    [data-search] {
      width: 50rem;
      margin-left: auto;

      div.text-field__adornment,
      input {
        background-color: transparent !important;
      }
    }
  }

  .add-article__btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem 3rem;
    width: max-content;
    border-radius: 0.5rem;

    svg {
      font-size: 22px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  .articles-list .infinite-scroll-component {
    padding: 0.5rem 3rem 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
    gap: 3rem;

    [data-article-card] {
      max-width: 38rem;
    }

    [data-spinner] {
      grid-column: span 4;
    }
  }
`;
