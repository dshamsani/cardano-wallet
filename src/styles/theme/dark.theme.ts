import { createTheme } from '@mui/material/styles'

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc'
    },
    secondary: {
      main: '#03dac6'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#e0e0e0'
    }
  }
})

export default dark
