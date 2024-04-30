import 'i18next'

import common from '../src/locales/cs/common.json'

interface I18Namespaces {
  common: typeof common
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18Namespaces
  }
}
