import styled from "styled-components";
import { scaleUpBeat } from "@/styles/utils/animations";
import { scrollbar } from "@/styles/utils/utils";

export const EmailFormLayout = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 3rem;
  align-items: stretch;

  .email-form__aside {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.white};
    width: 40rem;
  }

  .users-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;

    .infinite-scroll-component {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
      ${scrollbar};
      scroll-behavior: smooth;
    }
  }

  .selected.user-card {
    label[data-checkbox] .checkbox--icon {
      animation: ${scaleUpBeat(0.8, 1.3)} 0.3s ease-out forwards;

      svg {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  .content-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
