import { createTheme } from '@mui/material/styles'

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    }
  }
})

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc'
    },
    secondary: {
      main: '#03dac6'
    }
  }
})

export { light, dark }
