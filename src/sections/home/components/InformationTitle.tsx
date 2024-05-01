import type { FC } from 'react'

import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next'

interface InformationTitleProps {}

export const InformationTitle: FC<InformationTitleProps> = () => {
  const { t } = useTranslation('common')

  return (
    <Typography variant="h4" gutterBottom>
      {t('informationTitle')}
    </Typography>
  )
}
