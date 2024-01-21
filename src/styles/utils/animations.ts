import { keyframes } from "styled-components";

const scaleUp = (initialScale: number = 0.9) => {
  const frame = keyframes`
    from{
      opacity: 0;
      transform: scale(${initialScale});
    }
    to{
      opacity: 1;
      transform: scale(1);
    }
  `;

  return frame;
};

const scaleDown = () => {
  const frame = keyframes`
    from{
      opacity: 1;
      transform: scale(1);
    }
    to{
      opacity: 0;
      transform: scale(0);
    }
  `;

  return frame;
};

const scaleUpBeat = (
  initialScale: number = 0.9,
  middleScale: number = 1.05
) => {
  const frame = keyframes`
    50%{
      opacity: 0;
      transform: scale(${initialScale});
    }
    50%{
      opacity: 1;
      transform: scale(${middleScale});
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  `;

  return frame;
};

const scaleUpRotated = (degree: number, initialScale: number = 0.9) => {
  const deg = `${degree}deg`;
  const frame = keyframes`
    from{
    opacity: 0;
    transform: scale(${initialScale}) rotate(${deg});  
    }
    to{
    opacity: 1;
    transform: scale(1) rotate(${deg});  
  }
  `;

  return frame;
};

const moveY = (initial: number) => {
  const top = `${initial}px`;

  const frame = keyframes`
    from{
      opacity: 0;
      transform: translateY(${top});
    }

    to{
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return frame;
};

const moveX = (initial: number) => {
  const left = `${initial}px`;

  const frame = keyframes`
    from{
      opacity: 0;
      transform: translateX(${left});
    }

    to{
      opacity: 1;
      transform: translateX(0);
    }
  `;

  return frame;
};

export { scaleUp, scaleDown, scaleUpBeat, moveY, moveX, scaleUpRotated };
