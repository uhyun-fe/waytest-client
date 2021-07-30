import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const style = createGlobalStyle`
    ${reset}

    :root {
        --main: #874703;
        --dark: #704000;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dd,
    dl,
    dt,
    li,
    ol,
    ul,
    fieldset,
    form,
    label,
    legend,
    button,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        font-size: 100%;
        line-height: 1;
        font-family: inherit;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    ol,
    ul {
        list-style: none;
    }
    q:before,
    q:after,
    blockquote:before,
    blockquote:after {
        content: "";
    }
    html {
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    a:focus {
        outline: thin dotted;
    }
    a:hover,
    a:active {
        outline: 0;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section {
        display: block;
    }
    audio,
    canvas,
    video {
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }
    audio:not([controls]) {
        display: none;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    img {
        border: 0;
        -ms-interpolation-mode: bicubic;
    }
    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
        *vertical-align: middle;
    }
    button,
    input {
        line-height: normal;
        *overflow: visible;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    button,
    input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        cursor: pointer;
        -webkit-appearance: button;
    }
    input[type="search"] {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    textarea {
        overflow: auto;
        vertical-align: top;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    }
    @keyframes glow {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    /* font */

    @font-face {
      font-family: 'GmarketSans';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
      font-weight: 300;
      font-style: normal;
   }
   @font-face {
      font-family: 'GmarketSans';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
   }
   @font-face {
      font-family: 'GmarketSans';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
   }

    .force-wrap {
        word-wrap: break-word;
        word-break: break-all;
        -ms-word-break: break-all;
        word-break: break-word;
        hyphens: auto;
    }
    .type-light {
        /* font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; */
        font-family: "GmarketSans";
        font-weight: 300;
    }
    .type-bold {
        font-family: "GmarketSans";
        font-weight: 800;
    }
    .type-italic {
        font-family: "GmarketSans";
        font-weight: 400;
        font-style: italic;
    }
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }
    html,
    button,
    input,
    textarea,
    select {
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-family: "GmarketSans";
        font-style: 400;
        color: #333;
        font-size: 16px;
        background-color: #fff;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "GmarketSans";
        font-style: 400;
        margin: 0;
        padding: 0;
    }
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main {
        margin-top: 50px;
        width: 90%;
        max-width: 500px;
        min-width: 320px;
        /* background:#f2f2f2; */
    }
`;

export default style;
