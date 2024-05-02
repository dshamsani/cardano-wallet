import type { FC } from 'react'
import type { WalletInfoAssets } from 'types/blockfrost'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import { NftListItem } from './components/NftListItem'
import { NftListItemFetch } from './components/NftListItemFetch'

interface NftListProps {
  assets: WalletInfoAssets[]
}

export const NftList: FC<NftListProps> = ({ assets }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        {/* @ts-ignore test */}
        {assets.map(({ asset, quantity }, index) => (
          <NftListItemFetch key={asset} asset={asset}>
            {({ assetById }) =>
              assetById['onchain_metadata']?.image && (
                <>
                  <NftListItem quantity={quantity} assetItem={{ assetById }} />
                  {index !== assets.length - 1 && (
                    <Divider style={{ margin: '10px 0' }} />
                  )}
                </>
              )
            }
          </NftListItemFetch>
        ))}
      </CardContent>
    </Card>
  )
}
