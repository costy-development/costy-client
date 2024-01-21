import styled from "styled-components";
import { moveX } from "@/styles/utils/animations";

export const SearchField = styled.div`
  opacity: 0;
  animation: ${moveX(35)} 0.4s 0.3s ease-out forwards;
  width: 100%;

  .search-adornment {
    font-size: 22px;
    display: flex;

    svg {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
