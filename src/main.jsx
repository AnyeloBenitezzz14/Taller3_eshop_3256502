import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'

// create a more vibrant, non‑minimal palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f00', // orange
    },
    secondary: {
      main: '#d32f2f', // red
    },
    background: {
      default: '#faf3e0',
    },
    text: {
      primary: '#212121',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
