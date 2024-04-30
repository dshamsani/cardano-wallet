import { createTheme } from '@mui/material/styles'

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007bff'
    },
    secondary: {
      main: '#e91e63'
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333333'
    }
  }
})

export default light
