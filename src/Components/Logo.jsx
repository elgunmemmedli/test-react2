import React from 'react'
import BarIcon from './BarIcon'

export default function Logo({ showSidebar, setShowSidebar }) {
  return (
    <div className='flex'>
    <div className='text-white mr-[150px]'>Logo</div>
    <BarIcon showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  )
}
