import React from 'react'
import PageTitle from '../PageTitle/PageTitle'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../../utils/utils.js";
export default function NavBarLeft() {
    const navigate = useNavigate();

   const logoutPage = ()=>{
    navigate('/login');
    logout();
   }

  return (
    <div>
<nav>
<ul className='m-4'>
    <PageTitle title={'core'}/>
    <li className='mb-10'>
<Link to={'/'} className='text-gray-500 hover:text-gray-100 text-lg'>Dashboard</Link>
    </li>

<PageTitle title={'interface'}/>

<li className='mb-3'>
    <Link to={'layouts'} className='text-gray-500 hover:text-gray-100 text-lg'>Layouts</Link>
</li>
<li className='mb-3'>
<Link className='text-gray-500 hover:text-gray-100 text-lg'> Pages</Link>
</li>
<li className='mb-'>
    <Link to={'login'} className='text-gray-500 hover:text-gray-100 text-lg'>Login</Link>
</li>
<li className='mb-'>
    <button onClick={logoutPage} className='text-gray-500 hover:text-gray-100 text-lg'>Logout</button>
</li>
</ul>

</nav>

    </div>
  )
}
