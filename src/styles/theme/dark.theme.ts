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
      default: '#1e1e1e',
      paper: '#121212'
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0'
    }
  }
})

export default dark
