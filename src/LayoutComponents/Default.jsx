import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'
import LeftBar from '../UI/LeftBar'
import { useState } from 'react'

export default function Default() {
  const [showSidebar, setShowSidebar] = useState(false);

  console.log(showSidebar);
  
  return (
    <div className='grid grid-cols-6'>
      <div className='header col-start-1 col-end-12'>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        </div>
        <div className="left-bar col-start-1">
        <LeftBar showSidebar={showSidebar}/>
        </div>
        <Outlet/>
    </div>
  )
}
