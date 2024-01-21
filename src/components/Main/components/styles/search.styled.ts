import styled from "styled-components";
import { scrollbar } from "@/styles/utils/utils";

import { moveY } from "@/styles/utils/animations";

export const Search = styled.div`
  width: 60vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  padding: 2rem 0rem 3rem 3rem;

  [data-search] {
    width: 60%;
  }

  .search-title {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    opacity: 0;
    animation: ${moveY(-15)} 0.4s 0.3s ease-out forwards;
  }

  .search-result {
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    overflow-y: auto;
    opacity: 0;
    animation: ${moveY(35)} 0.4s 0.3s ease-out forwards;

    .infinite-scroll-component__outerdiv {
      width: 100%;
    }

    .infinite-scroll-component {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-right: 2rem;
      scroll-behavior: smooth;
      ${scrollbar};
    }
  }
`;
