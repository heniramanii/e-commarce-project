import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'

const OutletUser = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default OutletUser
