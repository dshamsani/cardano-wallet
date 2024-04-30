import type { FC } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'

import { useTheme } from '@mui/material/styles'

interface LayoutHeaderProps {
  localeState: string | undefined
  changeLocale: () => void
  toggleColorMode: (() => void) | undefined
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  localeState,
  changeLocale,
  toggleColorMode
}) => {
  const {
    palette: { mode }
  } = useTheme()

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ backdropFilter: 'blur(10px)' }}
    >
      <Toolbar>
        <Button color="inherit" onClick={changeLocale}>
          {localeState === 'en' ? 'CZ' : 'EN'}
        </Button>
        <IconButton
          color="inherit"
          onClick={toggleColorMode}
          edge="end"
          style={{ marginLeft: 'auto' }}
        >
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
