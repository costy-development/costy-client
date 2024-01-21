import { css } from "styled-components";

export const circleBox = css`
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  width: ${({ theme }) => theme.circle.parent_diameter};
  height: ${({ theme }) => theme.circle.parent_diameter};
  box-shadow: ${({ theme }) => theme.boxShadow.circle_shadow};
`;

export const arch = css`
  .arch {
    position: absolute;
    inset: -5px;
    border-radius: inherit;
    border: 140px solid ${({ theme }) => theme.colors.blue};
    border-right-color: transparent;
    z-index: 1;
  }

  .arch::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 140px;
    height: 140px;
    background-color: ${({ theme }) => theme.colors.blue};
    right: -85px;
    top: -40px;
    transform: rotate(-44deg);
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
  }

  .arch::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 140px;
    height: 140px;
    background-color: ${({ theme }) => theme.colors.blue};
    right: -85px;
    bottom: -40px;
    transform: rotate(-46deg);
    border-bottom-right-radius: 100%;
    border-top-right-radius: 100%;
  }

  .arch.white-arch {
    border-color: ${({ theme }) => theme.colors.white} !important;
    border-right-color: transparent !important;
    z-index: 9;
  }

  .arch.white-arch::after,
  .arch.white-arch::before {
    background-color: ${({ theme }) => theme.colors.white} !important;
  }

  .arch.white-arch::after {
    right: -90px;
    top: -34px;
  }

  .arch.white-arch::before {
    right: -90px;
    bottom: -34px;
  }
`;

export const center = css`
  position: absolute;
  z-index: 9999;
  inset: 135px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: royalblue;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const circle = css`
  ${arch};

  .center {
    ${center};
  }

  .circle {
    ${circleBox}
  }
`;
