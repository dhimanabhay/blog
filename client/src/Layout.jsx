import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className='p-[10px] my-0 mx-auto max-w-[1050px]'>
        <Header />
        <Outlet />
    </main>
  )
}
