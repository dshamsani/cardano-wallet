import type { FC } from 'react'
import type { WalletInfoAmountItem } from 'types/blockfrost'

import { Fragment } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import { BalanceInfoItem } from './components/BalanceInfoItem'

interface BalanceInfoProps {
  amount: WalletInfoAmountItem[]
}

export const BalanceInfo: FC<BalanceInfoProps> = ({ amount }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        {amount.map((item, index) => (
          <Fragment key={item.unit}>
            <BalanceInfoItem quantity={item.quantity} unit={item.unit} />
            {index !== amount.length - 1 && (
              <Divider style={{ margin: '10px 0' }} />
            )}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  )
}
