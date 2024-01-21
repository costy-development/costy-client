import styled from "styled-components";

export const AppLayout = styled.div`
  /* background: url("/icons/bg-line.svg");
  background-repeat: no-repeat;
  background-position: -25rem -35rem;
  overflow-x: hidden;
  background-size: cover; */
  position: relative;
  min-height: 100vh;

  &.lined::after {
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
  }

  .app-head {
    transform: translateY(-20rem);
    opacity: 0;
  }
`;
