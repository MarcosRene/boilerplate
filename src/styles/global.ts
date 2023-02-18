import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #06092b;
    --color: #ffffff;
  }

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
