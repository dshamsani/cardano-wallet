import type { AssetItemInfo } from 'types/blockfrost'
import type { FC } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { NftListItemModal } from './NftListItemModal/NftListItemModal'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { IPFS_BLUR_IMG, IPFS_URL } from 'constants/blockfrost'

interface NftListItemProps {
  assetItem: Pick<AssetItemInfo, 'assetById'>
  quantity: string
}

export const NftListItem: FC<NftListItemProps> = ({ quantity, assetItem }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { t } = useTranslation('common')

  const { assetById } = assetItem

  let src = ''

  if (typeof assetById['onchain_metadata']?.image === 'string') {
    src = IPFS_URL + assetById['onchain_metadata']?.image.replace('ipfs://', '')
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack sx={{ width: 'fit-content' }}>
          <Image
            src={src}
            alt={assetById['onchain_metadata']!.name}
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={IPFS_BLUR_IMG}
            priority
          />
        </Stack>
        <Stack sx={{ width: 200 }}>
          <Typography variant="body1" fontWeight={700}>
            {t('nftList.nft')}
          </Typography>
          <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
            {assetById['onchain_metadata']!.name}
          </Typography>
        </Stack>
        <Button sx={{ width: 200 }} onClick={() => setOpen(true)}>
          {t('nftList.review')}
        </Button>
        <Stack>
          <Typography variant="body1" fontWeight={700}>
            {t('nftList.quantity')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ wordWrap: 'break-word', textAlign: 'center' }}
          >
            {quantity}
          </Typography>
        </Stack>
      </Stack>
      {open && (
        <NftListItemModal
          onClose={() => setOpen(false)}
          open={open}
          assetItem={assetItem}
        />
      )}
    </>
  )
}
