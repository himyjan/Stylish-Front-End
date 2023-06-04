import { createGlobalStyle } from 'styled-components';

const RootStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    padding: 140px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 102px 0 208px;
    }
  }
`;

export default RootStyle;
