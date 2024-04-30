import type { FC } from 'react'
import type { Page } from 'types/page'

import { TranslationsProvider } from 'contexts/TranslationsProvider'
import { initTranslations } from 'utils/i18n'

import { Home } from 'sections/home/Home'

import { getTitle } from 'utils/seo/getTitle'

const i18nNamespaces = ['common']

export const generateMetadata = async ({ params }: Page) => {
  const { t } = await initTranslations(params.locale, i18nNamespaces)

  return {
    title: getTitle(t('common:pageTitle'))
  }
}

const HomePage: FC<Page> = async ({ params: { locale } }) => {
  const i18n = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={i18n.resources}
    >
      <Home />
    </TranslationsProvider>
  )
}

export default HomePage
