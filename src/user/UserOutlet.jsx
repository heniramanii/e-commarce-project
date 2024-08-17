import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
const UserOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserOutlet