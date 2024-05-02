import type { WalletInfo } from 'types/blockfrost'
import type { FC, ReactNode } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

import { LoadingSpinner } from './components/LoadingSpinner'

import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

interface WalletFetchProps {
  children: (walletInfo: WalletInfo) => ReactNode
  PROJECT_ID: string
}

export const WalletFetch: FC<WalletFetchProps> = ({ children, PROJECT_ID }) => {
  const { t } = useTranslation('common')

  const {
    data: walletInfo,
    isLoading,
    error
  } = useQuery<WalletInfo>({
    queryKey: ['walletInfo', { PROJECT_ID }],
    queryFn: async () => {
      const response = await fetch(`/api/blockfrost?id=${PROJECT_ID}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      return response.json()
    }
  })

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error || !walletInfo) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 3,
          borderRadius: 1
        }}
      >
        <ErrorOutlineIcon sx={{ color: 'error.dark', fontSize: 40, mb: 2 }} />
        <Typography variant="h4" gutterBottom color="error.dark">
          {t('error.errorTitle')}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ mb: 2 }}
        >
          {t('error.errorDescription')}
        </Typography>
      </Box>
    )
  }

  return children(walletInfo)
}
