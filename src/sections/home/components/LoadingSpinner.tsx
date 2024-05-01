import type { FC } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

export const LoadingSpinner: FC = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: '50vh', width: '100%' }}
    >
      <CircularProgress size={106} variant="indeterminate" />
    </Stack>
  )
}
