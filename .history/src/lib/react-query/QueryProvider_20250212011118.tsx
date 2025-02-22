import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const quer

export const QueryProvider = ({children}: { children: ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>

    </QueryClientProvider>

  )
}