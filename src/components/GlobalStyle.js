import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
p,
h1,
h2,
h3,
ol,
ul,
fieldset,
input,
button,
textarea {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

button {
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: 0;
}

img {
  display: block;
  max-width: 100%;
}


body {
  margin: 0 ;
  font-family: "Inter", sans-serif;
  color: white;
  background-color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 90px auto;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    padding: 0 32px;
    margin: 120px auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 60px;
  }
`;
