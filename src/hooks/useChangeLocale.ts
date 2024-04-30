import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ChangeLocaleProps {
  localeState: string | undefined
  changeLocale: () => void
}

export const useChangeLocale = (
  locale: string | undefined
): ChangeLocaleProps => {
  const [localeState, setLocaleState] = useState<string | undefined>(locale)
  const router = useRouter()

  useEffect(() => {
    router.push(localeState === 'en' ? 'cs' : 'en')
  }, [localeState])

  const changeLocale = () => {
    setLocaleState(prev => (prev === 'en' ? 'cs' : 'en'))
  }

  return {
    localeState,
    changeLocale
  }
}
