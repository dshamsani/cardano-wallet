'use client'
import type { FC } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { WalletFetch } from './WalletFetch'

export const Home: FC = () => {
  return (
    <Container
      sx={{
        backgroundColor: 'background.paper',
        width: 1,
        minHeight: 1,
        overflow: 'hidden'
      }}
    >
      <WalletFetch>
        {walletInfo => (
          <Box>
            <Typography variant="h4" gutterBottom>
              Wallet Information
            </Typography>
          </Box>
        )}
      </WalletFetch>
    </Container>
  )
}
