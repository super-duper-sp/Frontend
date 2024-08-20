import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/HomePage/Header'
import Sidebar from '../Component/HomePage/Sidebar'
import NavigationBar from '../Component/HomePage/NavigationBar'


const HomeLayout = () => {
  return (
<>
<div className='w-full flex'>
<NavigationBar/>

    <main>
    <Outlet/>
    </main>
 </div>
</>
  )
}

export default HomeLayout