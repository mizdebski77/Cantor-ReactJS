import { createGlobalStyle } from "styled-components";
import background from "./background2.jpg"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  min-height: 100vh;
  font-family: 'Heebo', sans-serif;
  background: black;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  padding: 100px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding: 10px;
    padding-top:100px ;
    } 
}
`;