'use client'
import type { FC } from 'react'

import { Fragment } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { WalletFetch } from './WalletFetch'

import { InformationTitle } from './components/InformationTitle'
import { InformationControl } from './components/InformationControl'

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
        {walletInfo => (
          <Box sx={{ my: 10 }}>
            <InformationTitle />
            <InformationControl />
            {selectedOption === 'balance' && (
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Balance:</Typography>
                  <Divider style={{ margin: '10px 0' }} />
                  {walletInfo.amount.map(item => (
                    <Fragment key={item.unit}>
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1">
                          <strong>Unit:</strong> {item.unit}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Quantity:</strong> {item.quantity}
                        </Typography>
                      </Box>
                      <Divider style={{ margin: '10px 0' }} />
                    </Fragment>
                  ))}
                </CardContent>
              </Card>
            )}
          </Box>
        )}
      </WalletFetch>
    </Container>
  )
}
