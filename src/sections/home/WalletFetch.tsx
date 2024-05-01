import type { WalletInfo } from 'types/blockfrost'
import type { FC, ReactNode } from 'react'

import { LoadingSpinner } from './components/LoadingSpinner'

import { useEffect, useState } from 'react'

import { PROJECT_ID } from 'constants/blockfrost'

interface WalletFetchProps {
  children: (walletInfo: WalletInfo) => ReactNode
}

export const WalletFetch: FC<WalletFetchProps> = ({ children }) => {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blockfrost?id=${PROJECT_ID}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }

        const data: WalletInfo = await response.json()

        setWalletInfo(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return loading ? (
    <LoadingSpinner />
  ) : (
    !error && walletInfo && children(walletInfo)
  )
}
