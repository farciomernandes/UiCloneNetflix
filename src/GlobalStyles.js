import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}

body{
  background-color: #111;
  color: #FFF;
  margin: 0;
  font-family: 'Roboto', 'sans-serif';
  -webkit-font-smoothing: antialiased;
}
a{
  text-decoration: none;
}

`;


export default GlobalStyles;
