import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:inherit ;
    }
    html{
        box-sizing: border-box;
        font-size: 62.5%;

    }

    body{
        background-color: #fff;
    }
    img{
        width: 100%;
    }
`;
//now 1 rem = 10 px;
