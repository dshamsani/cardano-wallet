'use client'
import type { FC } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { WalletFetch } from './WalletFetch'

import { InformationTitle } from './components/InformationTitle'
import { InformationControl } from './components/InformationControl'
import { BalanceInfo } from './components/BalanceInfo/BalanceInfo'
import { NftList } from './components/NftList/NftList'

import { useInformation } from './context/InformationContext'

export const Home: FC = () => {
  const { selectedOption } = useInformation()

  return (
    <Container
      sx={{
        backgroundColor: 'background.paper',
        width: 1,
        minHeight: '93.5vh',
        overflow: 'hidden'
      }}
    >
      <WalletFetch>
        {({ addresses, assets }) => (
          <Box sx={{ my: 10 }}>
            <InformationTitle />
            <InformationControl />
            {selectedOption === 'balance' && (
              <BalanceInfo amount={addresses.amount} />
            )}
            {selectedOption === 'nft' && <NftList assets={assets} />}
          </Box>
        )}
      </WalletFetch>
    </Container>
  )
}
