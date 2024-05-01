import type { Dispatch, FC, SetStateAction } from 'react'
import type { SelectChangeEvent } from '@mui/material/Select'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { useTranslation } from 'react-i18next'
import { useInformation } from '../context/InformationContext'

export const InformationControl: FC = () => {
  const { t } = useTranslation('common')
  const { selectedOption, handleOptionChange } = useInformation()

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel id="select-label">{t('informationControl.title')}</InputLabel>
      <Select
        labelId="select-label"
        value={selectedOption}
        onChange={handleOptionChange}
        label={t('informationControl.title')}
      >
        <MenuItem value="balance">
          {t('informationControl.items.balance')}
        </MenuItem>
        <MenuItem value="nft">{t('informationControl.items.nft')}</MenuItem>
      </Select>
    </FormControl>
  )
}
