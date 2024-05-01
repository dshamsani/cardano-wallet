'use client'
import type { FC } from 'react'

import { InformationContextProvider } from './context/InformationContext'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { WalletFetch } from './WalletFetch'

import { InformationTitle } from './components/InformationTitle'
import { InformationControl } from './components/InformationControl'

export const Home: FC = () => {
  return (
    <InformationContextProvider>
      <Container
        sx={{
          backgroundColor: 'background.paper',
          width: 1,
          minHeight: '93.5vh',
          overflow: 'hidden'
        }}
      >
        <WalletFetch>
          {walletInfo => (
            <Box sx={{ mt: 10 }}>
              <InformationTitle />
              <InformationControl />
            </Box>
          )}
        </WalletFetch>
      </Container>
    </InformationContextProvider>
  )
}
