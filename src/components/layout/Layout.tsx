'use client'
import type { FC, PropsWithChildren } from 'react'

import Box from '@mui/material/Box'

import { LayoutHeader } from './components/LayoutHeader'

import { useThemeSwitch } from 'contexts/ThemeProvider'
import { useChangeLocale } from 'hooks/useChangeLocale'

interface LayoutProps {
  locale?: string
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  locale
}) => {
  const { changeLocale, localeState } = useChangeLocale(locale)
  const { toggleColorMode } = useThemeSwitch()

  return (
    <body>
      <Box position="relative" overflow="hidden" minHeight="100vh">
        <LayoutHeader
          changeLocale={changeLocale}
          localeState={localeState}
          toggleColorMode={toggleColorMode}
        />

        <main>{children}</main>
      </Box>
    </body>
  )
}
