import styled from "styled-components";

export const AppLayout = styled.div`
  position: relative;
  min-height: 100vh;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* &.lined::after {
    content: "";
    position: fixed;
    z-index: -1;
    top: -15rem;
    bottom: 0;
    left: 53%;
    width: 20rem;
    height: 150%;
    background-color: #e2e5e7;
    transform: rotate(-20deg) translateX(-50%);
  } */

  .app-head {
    transform: translateY(-20rem);
    opacity: 0;
  }
`;
