import type { AssetItemInfo } from 'types/blockfrost'
import type { FC, ReactNode } from 'react'

import Box from '@mui/material/Box'

import { LoadingSpinner } from '../../../components/LoadingSpinner'

import { useEffect, useState } from 'react'

interface NftListItemFetchProps {
  children: (assetInfo: AssetItemInfo) => ReactNode
  asset: string
}

export const NftListItemFetch: FC<NftListItemFetchProps> = ({
  children,
  asset
}) => {
  const [assetInfo, setAssetInfo] = useState<AssetItemInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blockfrost?asset=${asset}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }

        const data: AssetItemInfo = await response.json()

        setAssetInfo(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [asset])

  return loading ? (
    <Box sx={{ minWidth: 400, minHeight: 400 }}>
      <LoadingSpinner />
    </Box>
  ) : (
    !error && assetInfo && children(assetInfo)
  )
}
