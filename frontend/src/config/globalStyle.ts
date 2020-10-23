import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-size:100%;
    }
    #root{
        display:flex;
    }
    body, html{
        font-family:sans-serif;
        color:white;
        background-color: #020122;
    }

`;

export default GlobalStyles;
