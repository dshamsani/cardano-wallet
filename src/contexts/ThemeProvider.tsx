'use client'
import type { FC, PropsWithChildren } from 'react'

import { useMemo } from 'react'

import * as locales from '@mui/material/locale'

import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import { dark, light } from 'styles/theme'

interface ThemeProviderProps extends PropsWithChildren {
  locale: string
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, locale }) => {
  const themeWithLocale = useMemo(
    () => createTheme(dark, locales[locale === 'en' ? 'enUS' : 'csCZ']),
    [locale]
  )

  return <MuiThemeProvider theme={themeWithLocale}>{children}</MuiThemeProvider>
}
