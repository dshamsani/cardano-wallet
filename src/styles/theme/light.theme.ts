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
      default: '#f0f0f0',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555'
    }
  }
})

export default light
