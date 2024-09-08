import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApplicationThemeProvider } from './context/ApplicationThemeContext.jsx'
import { GlobalStateProvider } from './context/GlobalStateContext.jsx'
import ToastConfig from './config/ToastConfig.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationThemeProvider>
      <GlobalStateProvider>
        <App />
        <ToastConfig/>
      </GlobalStateProvider>
    </ApplicationThemeProvider>
  </StrictMode>,
)
