import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='max-w-screen-xl  mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode >,
)
