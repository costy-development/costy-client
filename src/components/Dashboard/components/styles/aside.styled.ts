import styled from "styled-components";

export const Aside = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  width: 26rem;
  min-width: 26rem;
  height: 100vh;
  position: sticky;
  top: 0rem;
  background: ${({ theme }) => theme.colors.white};

  .dashboard-nav__list {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .active-link {
      color: ${({ theme }) => theme.colors.blue};
    }

    &-item {
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        line-height: 1;
      }
    }
  }
`;
