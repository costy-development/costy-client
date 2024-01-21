import styled from "styled-components";
import { scaleDown } from "@/styles/utils/animations";

export const UserCardCheckBox = styled.label`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  .checkbox--icon {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${scaleDown()} 0.3s ease forwards;
  }
`;
