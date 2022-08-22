// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
    --primary: #6667ab;
    --light: #f1ede9;
    --dark: #38382d;
  
  /* Remove these maybe?? */
    --teal-050: #effcf6;
    --teal-100: #c6f7e2;
    --teal-200: #8eedc7;
    --teal-300: #65d6ad;
    --teal-400: #3ebd93;
    --teal-500: #27ab83;
    --teal-600: #199473;
    --teal-700: #147d64;
    --teal-800: #0c6b58;
    --teal-900: #014d40;
  
    --blue-grey-050: #f0f4f8;
    --blue-grey-100: #d9e2ec;
    --blue-grey-200: #bcccdc;
    --blue-grey-300: #9fb3c8;
    --blue-grey-400: #829ab1;
    --blue-grey-500: #627d98;
    --blue-grey-600: #486581;
    --blue-grey-700: #334e68;
    --blue-grey-800: #243b53;
    --blue-grey-900: #102a43;
  }
  
  body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    background-color: var(--light);
    color: var(--dark);
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: inherit;
    align-items: center;
  }
  .header {
    width: 100%;
    color: var(--light);
    background-color: var(--primary);
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
  }
  .wrapper {
    border-color: var(--dark);
    width: 375px;
    text-align: center;
  }
  /* Autocomplete */
  input {
    border: 1px solid var(--primary);
    padding: 0.5rem;
    width: 300px;
  }
  
  .no-suggestions {
    color: var(--primary);
    padding: 0.5rem;
  }
  
  .suggestions {
    border: 1px solid var(--primary);
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
  }
  
  .suggestions li {
    padding: 0.5rem;
  }
  
  .suggestion-active,
  .suggestions li:hover {
    background-color: var(--blue-grey-300);
    cursor: pointer;
    font-weight: 700;
  }
  
`;
 
export default GlobalStyle;
