'use client'
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
  projectId: string | undefined
  handleOptionChange: (event: SelectChangeEvent) => void
  handleProjectIdSearch: (value: string) => void
}

const InformationContext = createContext<InformationContextValues>({
  selectedOption: '',
  projectId: undefined,
  handleOptionChange: () => {
    throw new Error('Function is not implemented.')
  },
  handleProjectIdSearch: () => {
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
  const [selectedOption, setSelectedOption] = useState<string>('nft')
  const [projectId, setProjectId] = useState<string | undefined>()

  const handleOptionChange = useCallback(
    (event: SelectChangeEvent) => {
      setSelectedOption(event.target.value as string)
    },
    [setSelectedOption]
  )

  const handleProjectIdSearch = useCallback(
    (value: string) => {
      setProjectId(value)
    },
    [setProjectId]
  )

  const contextState: InformationContextValues = useMemo(
    () => ({
      selectedOption,
      projectId,
      handleOptionChange,
      handleProjectIdSearch
    }),
    [selectedOption, projectId, handleOptionChange, handleProjectIdSearch]
  )

  return (
    <InformationContext.Provider value={contextState}>
      {children}
    </InformationContext.Provider>
  )
}
