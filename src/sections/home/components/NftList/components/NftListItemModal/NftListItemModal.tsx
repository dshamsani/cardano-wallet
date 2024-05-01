import type { FC } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import { NftListItemFetch } from '../NftListItemFetch'

import { useTranslation } from 'react-i18next'

interface NftListItemModalProps {
  asset: string
  open: boolean
  onClose: () => void
}

export const NftListItemModal: FC<NftListItemModalProps> = ({
  asset,
  open,
  onClose
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog open={open} onClose={onClose}>
      <NftListItemFetch asset={asset}>
        {({ assetById }) => (
          <Box sx={{ minHeight: 400 }}>
            <DialogTitle>{t('nftListItem.title')}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Card variant="outlined" sx={{ marginBottom: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      {t('nftListItem.name')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById['onchain_metadata']?.name ||
                        assetById['asset_name']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="h6">
                      {t('nftListItem.policy')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        wordBreak: 'break-word',
                        textWrap: 'wrap'
                      }}
                    >
                      {assetById['policy_id']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="h6">
                      {t('nftListItem.quantity')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById.quantity}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    {assetById['onchain_metadata']?.color && (
                      <>
                        <Typography variant="h6">Color:</Typography>
                        <Typography variant="body1">
                          {assetById['onchain_metadata'].color}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                      </>
                    )}
                    <Typography variant="h6">
                      {t('nftListItem.standard')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById['onchain_metadata_standard']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="h6">
                      {t('nftListItem.fingerprint')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById['fingerprint']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="h6">
                      {t('nftListItem.tx_hash')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById['initial_mint_tx_hash']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="h6">
                      {t('nftListItem.burn_count')}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {assetById['mint_or_burn_count']}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />

                    {assetById['metadata'] && (
                      <>
                        <Typography variant="h6">
                          {t('nftListItem.metadata')}:
                        </Typography>
                        <Typography variant="body1">
                          {JSON.stringify(assetById['metadata'], null, 2)}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                      </>
                    )}

                    {assetById['onchain_metadata_extra'] && (
                      <>
                        <Typography variant="h6">
                          {t('nftListItem.extra_metadata')}:
                        </Typography>
                        <Typography variant="body1">
                          {JSON.stringify(
                            assetById['onchain_metadata_extra'],
                            null,
                            2
                          )}
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                      </>
                    )}
                  </CardContent>
                </Card>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                {t('nftListItem.close')}
              </Button>
            </DialogActions>
          </Box>
        )}
      </NftListItemFetch>
    </Dialog>
  )
}
