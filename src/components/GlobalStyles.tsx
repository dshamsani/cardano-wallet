'use client'
import type { FC } from 'react'

import MuiGlobalStyles from '@mui/material/GlobalStyles'

import { css } from '@mui/material/styles'

import { fonts } from 'styles/global'

const GlobalStyles: FC = () => (
  <MuiGlobalStyles
    styles={css`
      ${fonts}
    `}
  />
)

export default GlobalStyles
