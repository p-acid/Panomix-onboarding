import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}


    * { 
      box-sizing: border-box;
      text-decoration: none;
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
      font-family: 'Roboto', sans-serif;
    }


  body{
    font-family: 'Roboto', sans-serif;
  }

  input,
  button{
	  border:none;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }
`;

export default GlobalStyle;
