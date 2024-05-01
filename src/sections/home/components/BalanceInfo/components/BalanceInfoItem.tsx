import type { FC } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next'

interface BalanceInfoItemProps {
  unit: string
  quantity: string
}

export const BalanceInfoItem: FC<BalanceInfoItemProps> = ({
  quantity,
  unit
}) => {
  const { t } = useTranslation('common')

  return (
    <Box display="flex" justifyContent="space-between">
      <Stack>
        <Typography variant="body1" fontWeight={700}>
          {t('informationBalance.unit')}
        </Typography>
        <Typography variant="body1">{unit}</Typography>
      </Stack>
      <Stack sx={{ width: 80 }}>
        <Typography variant="body1" fontWeight={700}>
          {t('informationBalance.quantity')}
        </Typography>
        <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
          {quantity}
        </Typography>
      </Stack>
    </Box>
  )
}
