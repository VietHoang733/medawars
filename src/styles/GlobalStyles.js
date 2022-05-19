import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 18px;
    height: 100vh;
    width: 100vw;
    font-family: 'Bebas Neue', cursive;
  }
  
`;
