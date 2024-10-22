import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    color: black;
  }

  body{
    background-color: #0c0ce94d;
    color: black;
    width: 100%;
    height: 100vh;
  }

`

export default GlobalCss
