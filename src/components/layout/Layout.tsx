import type { FC, PropsWithChildren } from 'react'

import Box from '@mui/material/Box'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <body>
    <Box position="relative" overflow="hidden" minHeight="100vh">
      <main>{children}</main>
    </Box>
  </body>
)
