import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-black :#090909;
        --color-orange-primary:#EC691A;
        --color-surface-secondary:#141414;
        --color-text-primary:#FFF;
        --color-box-secondary:#414141;
        --color-details-secondary:#343434;
        --colors-box-primary:#212121;

        --fontSize-nav-text:15px;
        --fontSize-header:25px;
        --fontSize-body-text:20px;
    }
    
    body {
          background: var(--color-black);
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
