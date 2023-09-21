import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-black :#090909;
        --color-white : #FFF;
        --color-orange:#EC691A;

        --fontSize-nav-text:15px;
    }
    
    body {
          background: #fafafa;
          font-family: "Poppins", sans-serif;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          margin-bottom: 0;
          color: inherit;
        }
        p {
          margin: 0;
        }
`;
