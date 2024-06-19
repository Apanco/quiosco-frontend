import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>
)
