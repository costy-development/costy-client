import styled from "styled-components";
import { scrollbar } from "@/styles/utils/utils";

export const EmailStand = styled.div`
  .template__select-btn {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem 4rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const EmailTemplates = styled.div`
  width: 70vw !important;
  height: 70vh !important;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  overflow-y: auto;
  padding-bottom: 1rem;
  ${scrollbar};

  figure {
    width: 40rem;
    height: 40rem;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
