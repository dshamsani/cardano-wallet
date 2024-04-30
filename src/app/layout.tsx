import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { dir } from 'i18next'

import { Layout } from 'components/layout/Layout'

import { ThemeProvider } from 'contexts/ThemeProvider'
import { TranslationsProvider } from 'contexts/TranslationsProvider'

import { initTranslations } from 'utils/i18n'
import { FALLBACK_LOCALE } from 'constants/locale'
import { cookies } from 'next/dist/client/components/headers'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from 'components/GlobalStyles'

export const metadata: Metadata = {
  title: 'Cardano Wallet Explorer',
  description:
    'Použijte tento nástroj k získání a zobrazení dat z adresy peněženky Cardano mainnet.',
  openGraph: {
    title: 'Cardano Wallet'
  }
}

const getCookiesLocale = () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value
  return locale ?? FALLBACK_LOCALE
}

const i18nNamespaces = ['common']

export const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = getCookiesLocale()

  const i18n = await Promise.resolve(initTranslations(locale, i18nNamespaces))

  return (
    <html lang={locale} dir={dir(locale)}>
      <ThemeProvider locale={locale}>
        <CssBaseline />
        <GlobalStyles />

        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={i18n.resources}
        >
          <Layout locale={locale}>{children}</Layout>
        </TranslationsProvider>
      </ThemeProvider>
    </html>
  )
}

export default RootLayout
