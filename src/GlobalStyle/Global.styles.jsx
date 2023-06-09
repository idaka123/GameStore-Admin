import { createGlobalStyle } from "styled-components/macro";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900;1000&family=Roboto&display=swap');
    :root {
        --text-color: #2F353F;
        --first-color: rebeccapurple;
        --second-color: #f4e9ff;
        --border-color: #dadada;
        /* size */

        --header-height: 60px;
    }
    
    *, *:before, *:after {
        -webkit-box-sizing: border-box!important;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
        font-family: 'Nunito', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        text-rendering: optimizeSpeed;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
    }
    .icon {
        cursor: pointer;
        color: var(--secondary_admin);
        transition: all .2s ease-in-out;
        &:hover {
            color: var(--hover-icon);
        }
    }
    label {
        font-size: 1.2rem;
    }
    .mt-8{
        margin-top: 8px!important;
    }
    .mb-8{
        margin-bottom: 8px!important;
    }
`