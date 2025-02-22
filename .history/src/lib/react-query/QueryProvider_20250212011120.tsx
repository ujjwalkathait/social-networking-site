import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = 

export const QueryProvider = ({children}: { children: ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>

    </QueryClientProvider>

  )
}