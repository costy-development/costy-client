import styled from "styled-components";

export const ExpandNav = styled.nav`
  position: fixed;
  z-index: 9;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 2.5rem 1rem;
  padding-left: 2rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.radial_sm};
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  width: 7.2rem;
  transition: all 0.4s ease;

  &.expanded {
    width: 24rem;

    .expand-btn svg {
      transform: rotate(90deg);
    }

    .expand-nav__list .expand-nav__list-item {
      a {
        gap: 2.5rem;
      }

      &--label {
        opacity: 1;
        width: auto;
        pointer-events: all;
      }
    }
  }

  .expand-btn {
    position: absolute;
    z-index: 1;
    left: -1.8rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4rem;
    height: 4rem;
    padding-right: 1.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      transition: all 0.4s ease;
      transform: rotate(-90deg);
    }
  }

  .expand-nav__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    width: 100%;

    &-item {
      a {
        display: grid;
        grid-template-columns: 3rem 1fr;
        align-content: center;
        align-items: center;
      }

      &--fig {
        grid-column: 1;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;

        svg,
        img {
          width: 100%;
          height: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }

      &.contact .expand-nav__list-item--label {
        padding-top: 1rem;
      }

      &--label {
        grid-column: 2;
        min-height: 4.5rem;
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.md};
        width: 0px;
        opacity: 0;
        pointer-events: none;
        word-wrap: break-word;
        overflow: hidden;
        transition: all 0.4s 0.2s ease;
      }
    }
  }
`;
