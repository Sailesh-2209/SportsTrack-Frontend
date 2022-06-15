import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContext } from "./context/auth";

import { ChakraProvider } from '@chakra-ui/react';

const theme = {
    styles: {
        global: {
            "html, body": {
                margin: 0,
                padding: 0,
            }
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
        <AuthContext.Provider>
            <App />
        </AuthContext.Provider>
    </ChakraProvider>
  </React.StrictMode>
);
