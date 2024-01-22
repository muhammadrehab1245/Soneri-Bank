import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
const font="'Montserrat', sans-serif"
const theme = createTheme({
  typography: {
    fontFamily: font,
  },  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 895,
      lg: 1150,
      xl: 1500,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode>
 <ThemeProvider theme={theme}>

    <App />
 </ThemeProvider>
  //</React.StrictMode>,
)
