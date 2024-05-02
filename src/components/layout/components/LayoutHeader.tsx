import type { ChangeEventHandler, FC, MouseEventHandler } from 'react'

import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import TextField from '@mui/material/TextField'
import Search from '@mui/icons-material/Search'

import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { useInformation } from 'sections/home/context/InformationContext'

import { DEFAULT_PROJECT_ID } from 'constants/blockfrost'
import { useTranslation } from 'react-i18next'

interface LayoutHeaderProps {
  localeState: string | undefined
  changeLocale: () => void
  toggleColorMode: (() => void) | undefined
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  localeState,
  changeLocale,
  toggleColorMode
}) => {
  const { t } = useTranslation('common')
  const { handleProjectIdSearch } = useInformation()
  const [inputValue, setInputValue] = useState<string>()

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value)
  }

  const {
    palette: {
      mode,
      background: { default: defaultColor },
      text: { primary }
    }
  } = useTheme()

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        backdropFilter: 'blur(10px)',
        color: primary,
        backgroundColor: defaultColor
      }}
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-around" sx={{ width: 1 }}>
          <Button color="inherit" onClick={changeLocale}>
            {localeState === 'en' ? 'CZ' : 'EN'}
          </Button>
          <TextField
            value={inputValue}
            defaultValue={DEFAULT_PROJECT_ID}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            placeholder={t('inputPlaceholder')}
            sx={{ marginLeft: 2, marginRight: 2, width: 400 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    onClick={() => handleProjectIdSearch(inputValue as string)}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <IconButton color="inherit" onClick={toggleColorMode} edge="end">
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
