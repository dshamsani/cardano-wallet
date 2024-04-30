import type { FC, PropsWithChildren } from 'react'
import type { Page } from 'types/page'

import i18nConfig from '../../../i18n.config'

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }))
}

const AppLayout: FC<PropsWithChildren<Page>> = ({ children }) => children

export default AppLayout
