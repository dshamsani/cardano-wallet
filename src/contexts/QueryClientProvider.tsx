'use client'

import {
  QueryCache,
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider
} from '@tanstack/react-query'
import React, { FC, PropsWithChildren, useState } from 'react'

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: true,
            retry: 3,
            staleTime: 5 * 1000,
            gcTime: 10 * 60 * 1000
          }
        },
        queryCache: new QueryCache({
          onError: (error: any) => console.error(error)
        })
      })
  )

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  )
}
