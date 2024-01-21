import styled from "styled-components";
import { circleBox, arch, center } from "../../../styles/utils/circle";

export const CircularNav = styled.nav`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${arch};

  .center {
    ${center};
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .menu-wrapper {
    ${circleBox};
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .menu {
    position: relative;
    z-index: 99;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .nested-menu {
    width: ${({ theme }) => theme.circle.child_diameter};
    height: ${({ theme }) => theme.circle.child_diameter};
    position: absolute;
    z-index: 999;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }

  .title {
    position: absolute;
    z-index: 9999;
    font-weight: 800;
    bottom: 5rem;
    left: calc(50% - 8rem);
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
