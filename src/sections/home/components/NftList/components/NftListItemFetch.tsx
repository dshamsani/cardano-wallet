import type { AssetItemInfo } from 'types/blockfrost'
import type { FC, ReactNode } from 'react'

import { useQuery } from '@tanstack/react-query'

interface NftListItemFetchProps {
  children: (assetInfo: AssetItemInfo) => ReactNode
  asset: string
}

export const NftListItemFetch: FC<NftListItemFetchProps> = ({
  children,
  asset
}) => {
  const {
    data: assetInfo,
    isLoading,
    error
  } = useQuery<AssetItemInfo>({
    queryKey: ['asset', { asset }],
    queryFn: async () => {
      const response = await fetch(`/api/blockfrost?asset=${asset}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      return response.json()
    }
  })

  return !isLoading && !error && assetInfo && children(assetInfo)
}
