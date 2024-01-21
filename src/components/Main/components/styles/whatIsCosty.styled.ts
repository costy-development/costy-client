import styled from "styled-components";
import { scrollbar } from "@/styles/utils/utils";

import { moveY } from "@/styles/utils/animations";

export const WhatIsCosty = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
  padding-left: 3rem;

  .costy-title {
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    opacity: 0;
    animation: ${moveY(-15)} 0.4s 0.3s ease-out forwards;
  }

  .info-wrapper {
    padding-right: 2rem;
    overflow-y: auto;
    scroll-behavior: smooth;
    ${scrollbar};
    opacity: 0;
    animation: ${moveY(15)} 0.4s 0.3s ease-out forwards;

    .info {
      padding-right: 2rem;
    }

    p {
      line-height: 1.5;
    }
  }
`;
