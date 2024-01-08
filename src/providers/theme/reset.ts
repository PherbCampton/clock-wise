import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, 
  body, 
  #root{
    isolation: isolate;
    background-color: ${(p) => p.theme.palette.background};
    
    input:focus,
    select:focus,
    button:focus,
    textarea:focus,
    input[type=button]:focus,
    input.form-control:focus {
      box-shadow: none;
      -moz-box-shadow: none;
      outline:none !important;
      -webkit-box-shadow: none;
      outline-width: 0 !important;
      color: ${(p) => p.theme.palette.text};
    }

    /* Change autocomplete styles in WebKit */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${(p) => p.theme.palette.text};
      -webkit-box-shadow: 0 0 0px 1000px ${(p) =>
        p.theme.palette.transparent} inset;
    }
  } 
`;
