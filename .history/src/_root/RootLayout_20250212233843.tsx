import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'

const RootLayout = () => {
  return (
    <div className='w-full md;flex'>
      <Topbar/>
      <LeftSidebar
    </div>
  )
}

export default RootLayout