import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>

    <ColorModeScript />

    <ChakraProvider theme={theme}>   {/*Chakra Provider it adds the styling and theme into our app */}
    <ColorModeSwitcher/>   {/* it adds dark and light theme switch*/}
      <App />
    </ChakraProvider>
  </StrictMode>
);

