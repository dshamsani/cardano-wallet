'use client'
import type { FC, PropsWithChildren } from 'react'

import { useMemo, useEffect, useState } from 'react'

import * as locales from '@mui/material/locale'

import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import { dark, light } from 'styles/theme'

const THEME_STORAGE_KEY = 'user-theme-preference'

interface ThemeProviderProps extends PropsWithChildren {
  locale: string
}

type themeModes = 'light' | 'dark'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, locale }) => {
  const [themeMode, setThemeMode] = useState<themeModes>()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    setThemeMode((savedTheme || 'dark') as themeModes)
  }, [])

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.storageArea === localStorage &&
        event.key === THEME_STORAGE_KEY
      ) {
        setThemeMode(event.newValue as themeModes)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const themeWithLocale = useMemo(() => {
    const theme = themeMode === 'dark' ? dark : light

    return createTheme(theme, locales[locale === 'en' ? 'enUS' : 'csCZ'])
  }, [themeMode, locale])

  return <MuiThemeProvider theme={themeWithLocale}>{children}</MuiThemeProvider>
}
