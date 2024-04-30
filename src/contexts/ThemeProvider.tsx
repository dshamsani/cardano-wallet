'use client'
import type { FC, PropsWithChildren } from 'react'

import { useMemo, useState, createContext, useContext } from 'react'

import * as locales from '@mui/material/locale'

import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'

import { dark, light } from 'styles/theme'

interface ThemeProviderProps extends PropsWithChildren {
  locale: string
}

const ThemeSwitchContext = createContext<{
  toggleColorMode?: () => void
}>({})

type themeModes = 'light' | 'dark'

export const useThemeSwitch = () => {
  return useContext(ThemeSwitchContext)
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, locale }) => {
  const [mode, setMode] = useState<themeModes>('light')

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const themeWithLocale = useMemo(() => {
    const theme = mode === 'dark' ? dark : light

    return createTheme(theme, locales[locale === 'en' ? 'enUS' : 'csCZ'])
  }, [mode, locale])

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <ThemeSwitchContext.Provider value={{ toggleColorMode }}>
        {children}
      </ThemeSwitchContext.Provider>
    </MuiThemeProvider>
  )
}
