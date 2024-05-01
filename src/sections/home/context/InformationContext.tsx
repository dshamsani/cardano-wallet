import type { SelectChangeEvent } from '@mui/material/Select'
import type { FC, PropsWithChildren } from 'react'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

interface InformationContextValues {
  selectedOption: string
  handleOptionChange: (event: SelectChangeEvent) => void
}

const InformationContext = createContext<InformationContextValues>({
  selectedOption: '',
  handleOptionChange: () => {
    throw new Error('Function is not implemented.')
  }
})

export const useInformation = () => {
  const context = useContext(InformationContext)

  if (!context) {
    throw new Error(
      'useInformationContext must be used within a InformationContext'
    )
  }

  return context
}

export const InformationContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('balance')

  const handleOptionChange = useCallback(
    (event: SelectChangeEvent) => {
      setSelectedOption(event.target.value as string)
    },
    [setSelectedOption]
  )

  const contextState: InformationContextValues = useMemo(
    () => ({
      selectedOption,
      handleOptionChange
    }),
    [selectedOption, handleOptionChange]
  )

  return (
    <InformationContext.Provider value={contextState}>
      {children}
    </InformationContext.Provider>
  )
}
