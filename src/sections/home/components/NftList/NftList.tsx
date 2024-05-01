import type { FC } from 'react'
import type { WalletInfoAssets } from 'types/blockfrost'

import { Fragment } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import { NftListItem } from './components/NftListItem'

interface NftListProps {
  assets: WalletInfoAssets[]
}

export const NftList: FC<NftListProps> = ({ assets }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        {assets.map(({ asset, quantity }, index) => (
          <Fragment key={asset}>
            <NftListItem asset={asset} quantity={quantity} />
            {index !== assets.length - 1 && (
              <Divider style={{ margin: '10px 0' }} />
            )}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  )
}
