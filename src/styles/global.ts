import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --red: #E62E4D;
        --purple: #5429CC;
        --green: #33CC95;

        
        --text-title: ;
        --text-body: ;
    }
        
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px (desktop padrão)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        
        @media (max-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }
    // REM  = 1rem =
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`