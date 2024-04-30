'use client'
import type { FC } from 'react'

import Typography from '@mui/material/Typography'

import { motion } from 'framer-motion'

import { Trans, useTranslation } from 'react-i18next'

export const Home: FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <Typography variant="h2" textAlign="center">
      <Trans t={t} i18nKey="common:pageTitle" components={{ br: <br /> }} />

      <motion.span
        style={{
          display: 'inline-block',
          marginLeft: 16,
          transformOrigin: 'bottom right'
        }}
        animate={{ rotate: [0, 16, -8, 16, -4, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1, repeatDelay: 1 }}
      >
        👋
      </motion.span>
    </Typography>
  )
}
