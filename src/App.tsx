import { useEffect, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { cartItemsContext } from './contexts/index';
import { cartItemsReducer } from './reducers/index';
import { product } from './types/productType';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
  }

  #root {
    min-height: 100vh;
    padding: 140px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 102px 0 208px;
    }
  }
`;

function App() {
  const [cartItems, dispatch] = useReducer(
    cartItemsReducer,
    JSON.parse(window.localStorage.getItem('cartItems') as string) ||
      ([] as product[])
  );

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <cartItemsContext.Provider value={{ cartItems, dispatch }}>
        <Reset />
        <GlobalStyle />
        <Header />
        <Outlet />
        <Footer />
      </cartItemsContext.Provider>
    </>
  );
}

export default App;
