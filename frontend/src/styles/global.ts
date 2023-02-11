import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'PoppinsRegular';
  src: local('PoppinsRegular'), url(/Poppins-Regular.ttf) format('truetype');
}
:root {
    --brand1: #6d0283;
    --brand2: #59046d;
    --brand3: #310544;
    --brand4: #180326;
    --brand5: #535871;
    --brand6: #121212;
    /* --brand6: #0b000d; */
    --brand7: #281b2a;
    --brand8: #080409;
    --brand9: #A4A6AE;
    --grey1: #5B5B5B;
    --grey2: #959595;
    --grey3: #D6D6D6;
    --grey4: #acacac;
    --grey5: #acacac;
    --white: #FFFFFF;
    --white1: #ffffff24;
    --black: #000000;
    --shadow: rgba(0, 0, 0, 0.08);
    --transparent: transparent;

  html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    background-color: var(--white);
  }  
  *::selection {
    background-color: var(--brand1);
    color: var(--white);
    text-shadow: none;
  }
  a {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
}
`;
export const ResetCSS = createGlobalStyle`
  html,main, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'PoppinsRegular', sans-serif;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: var(--brand6);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--brand1);
    border-radius: 5px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;