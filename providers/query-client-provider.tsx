'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from '@/providers/get-query-client'
import type * as React from 'react'

export default function ReactQueryProviders({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
