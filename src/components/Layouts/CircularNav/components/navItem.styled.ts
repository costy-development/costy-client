import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fan = (degree: number, reverse: boolean = false) => {
  const start = reverse ? `${degree + 20}deg` : `${degree - 20}deg`;
  const end = `${degree}deg`;

  const animation = keyframes`
    0%{
      opacity:0;
      transform: rotate(${start}) translateY(-50%);
    }

    100%{
      opacity:1;
      transform: rotate(${end}) translateY(-50%);
    }
  `;

  return animation;
};

export const NavItem = styled(Link)<{
  $rotate: number;
  $height: number;
  $rx: number;
  $left: number;
  $index: number;
}>`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform-origin: 100% 0%;
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  opacity: 0;
  font-weight: 600;

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }

  .nav-route__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  &.parent {
    height: ${({ $height }) => `${$height}px`};
    animation: ${({ $rotate }) => fan($rotate)} 0.8s
      ${({ $index }) => `${(800 / 6) * $index}ms`} ease forwards;
    /* background: green; */
  }

  &.nested {
    height: ${({ $height }) => `${$height}px`};
    animation: ${({ $rotate }) => fan($rotate, true)} 0.8s
      ${({ $index }) => `${(800 / 4) * $index}ms`} ease forwards;
    /* background-color: cornflowerblue; */
  }

  &.parent .nav-route__wrapper {
    transform: rotate(-90deg);
    left: ${({ $left }) => `${$left}px`};
  }

  &.nested .nav-route__wrapper {
    transform: rotate(-90deg);
    left: ${({ $left }) => `${$left}px`};
  }

  .icon {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
    }
  }

  .curved-text svg {
    transition: all 0.3s ease;
    fill: currentColor;

    &:hover {
      fill: royalblue;
    }

    path {
      /* stroke: lime;
      stroke-width: 2px; */
    }
  }

  &.parent .curved-text tspan {
    font-size: 18px;
  }

  &.nested .curved-text tspan {
    font-size: 16px;
  }
`;
