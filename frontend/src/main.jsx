import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StytchProvider } from '@stytch/react';
import { createStytchUIClient } from '@stytch/react/ui';

import './index.css'
import App from './App.jsx'

const stytch = createStytchUIClient('public-token-test-9200fce6-b71e-473c-a7e5-c3a362054fa2');


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <StytchProvider stytch={stytch}>
        <App />
      </StytchProvider>
  </StrictMode>,
)