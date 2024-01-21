import styled, { css } from "styled-components";
import { circle } from "../../styles/utils/circle";
import { scaleUpRotated, scaleUpBeat } from "@/styles/utils/animations";

const stick = css`
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: #fff;
`;

const stickLeft = css`
  ${stick};
  top: 165px;
  transform: rotate(45deg);
`;

const stickRight = css`
  ${stick};
  bottom: 165px;
  transform: rotate(-45deg);
`;

export const Main = styled.section`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${circle};

  .arch {
    border-width: 180px;

    &::before,
    &::after {
      width: 180px;
      height: 180px;
    }

    &::before {
      right: -130px;
      bottom: -93px;
    }

    &::after {
      right: -130px;
      top: -93px;
    }
  }

  .circle {
    background-color: ${({ theme }) => theme.colors.white};
  }

  .center {
    inset: 170px;
    z-index: 9;
  }
`;

export const MenuItem = styled.li<{ $index?: number }>`
  position: absolute;
  z-index: 8;
  list-style: none;
  font-weight: 600;

  &:has([data-dropdown]) {
    z-index: 10;
  }

  .list-item__route {
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.4s ease;
  }

  &.loop {
    left: 0;
    width: 50%;
    height: 662px;
    font-size: 24px;
    top: calc(50% - 331px);
    transform-origin: 100% 50%;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    transform: rotate(calc(-90deg * ${({ $index }) => $index! + 1}));

    .list-item__route {
      padding-left: 40px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: royalblue;
      }

      &.loop.costy-tools {
        padding-left: 30px;
        position: relative;

        span {
          opacity: 0;
          transform: rotate(90deg);
          animation: ${scaleUpRotated(90, 0.8)} 0.4s 0.4s ease-out forwards;
        }

        &::after {
          ${stickLeft};
        }

        &::before {
          ${stickRight};
        }
      }

      &.loop.guest-view {
        padding-left: 30px;

        span {
          opacity: 0;
          animation: ${scaleUpRotated(0, 0.6)} 0.4s 0.2s ease-out forwards;
        }
      }

      &.loop.what-is--costy {
        padding-left: 50px;

        &::after {
          ${stickLeft};
        }

        &::before {
          ${stickRight};
        }

        span {
          opacity: 0;
          transform: rotate(-90deg);
          animation: ${scaleUpRotated(-90, 0.8)} 0.4s ease-out forwards;
        }
      }
    }
  }

  &.manual {
    font-size: 30px;

    button span,
    a span {
      display: flex;
      align-items: center;
      opacity: 0;
      animation: ${scaleUpBeat(0.6, 1.4)} 0.4s 0.6s ease-out forwards;
    }

    &.search {
      top: 180px;
      right: 100px;
    }

    &.menu {
      bottom: 180px;
      right: 100px;
    }
  }
`;
