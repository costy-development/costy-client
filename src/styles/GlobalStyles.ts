import { createGlobalStyle } from "styled-components";
import { scrollbar } from "./utils/utils";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: "Fira Sans", sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    font-size: 1.6rem;
    overflow-x: hidden;
    max-width: 100vw;
    color: ${({ theme }) => theme.colors.text};
    ${scrollbar};
  }

  body:has(.scroll-block){
    overflow: hidden;
  }

  a {
    text-decoration: none;
    font-weight: inherit;
  }
  
  li,
  ul{
    list-style:none;
  }

  button{
    border:none;
    background: none;
    outline:none;
    cursor:pointer;
  }

  input::-webkit-inner-spin-button{
    display: none;
  }

  a,
  button,
  input,
  textarea{
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }
`;

export default GlobalStyles;
