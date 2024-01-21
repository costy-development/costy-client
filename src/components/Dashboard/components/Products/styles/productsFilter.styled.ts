import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 4rem;

  [data-search] {
    width: 60rem;
  }

  [data-dropdown] {
    margin-top: 0.5rem;
  }
`;
