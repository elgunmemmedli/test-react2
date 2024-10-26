import React from 'react'
import Logo from './Logo'
import BarIcon from './BarIcon'
import SearchInput from './SearchInput'
import Dropdown from './Dropdown'

export default function Navbar({ showSidebar, setShowSidebar}) {
    return (
        <>

        <nav className='bg-gray-800'>
<div className=' flex flex-wrap items-center justify-between mx-auto p-2'>
<div id="logo">
    <a href="#">   
         <Logo  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </a>
</div>
<div id="search">
    <SearchInput/>
</div>

</div>

        </nav>
        </>
    )
}
