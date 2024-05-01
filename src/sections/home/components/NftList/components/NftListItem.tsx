import type { FC } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { NftListItemFetch } from './NftListItemFetch'
import { NftListItemModal } from './NftListItemModal/NftListItemModal'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NftListItemProps {
  asset: string
  quantity: string
}

export const NftListItem: FC<NftListItemProps> = ({ asset, quantity }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { t } = useTranslation('common')

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Stack sx={{ width: 800 }}>
          <Typography variant="body1" fontWeight={700}>
            {t('nftList.asset')}
          </Typography>
          <Typography variant="body1">{asset}</Typography>
        </Stack>
        <Button sx={{ width: 200 }} onClick={() => setOpen(true)}>
          {t('nftList.review')}
        </Button>
        <Stack sx={{ width: 80 }}>
          <Typography variant="body1" fontWeight={700}>
            {t('nftList.quantity')}
          </Typography>
          <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
            {quantity}
          </Typography>
        </Stack>
      </Box>
      {open && (
        <NftListItemModal
          onClose={() => setOpen(false)}
          open={open}
          asset={asset}
        />
      )}
    </>
  )
}
