import styled from "styled-components";

export const Dashboard = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  .empty-dashboard {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    span {
      font-size: ${({ theme }) => theme.fontSize.h3};
      margin-left: 1.2rem;
    }
  }
`;
