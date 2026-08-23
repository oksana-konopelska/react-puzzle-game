import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS, TILE_SIZES } from "./config/config";

const GlobalStyle = createGlobalStyle`
  :root {
    --tile-size: ${TILE_SIZES.desktop};
    --background-color: #F4F4F6;
    --tile-color: #0083b3a8;
    --tile-correct-color: #0056b3;
    --button-color: #0056b3;
    --button-hover-color: #024893;
    
    font-size: 16px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    :root {
      --tile-size: ${TILE_SIZES.tablet}; 
    }
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    :root {
      --tile-size: ${TILE_SIZES.mobile};
      
      font-size: 14px;
    }
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background-color);
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    margin: 0 auto;
  
      h1 {
      text-align: center;
      font-size: 2.4em;
      color:black;
      margin: 0 0 40px;
      font-weight: 600;}
      }
  }
`;

export default GlobalStyle;
