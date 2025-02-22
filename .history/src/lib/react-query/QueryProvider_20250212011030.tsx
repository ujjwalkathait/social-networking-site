import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const QueryProvider = ({children}: { children: ReactNode}) => {
  return (
    <QueryClientProvider client={QueryClient}>

  )
}