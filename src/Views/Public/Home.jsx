/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Navbar_public,Header_public,Footer_public,School_Activities,Special_Logos,Welcome,Req, Copy } from '../../Components/Public'

export default function Home() {
  return (
    <div>
      <Navbar_public/>
      <Header_public/>
      <Welcome/>
      <Special_Logos/>
      <Req/>
      <School_Activities/>
      <Footer_public/>
      <Copy/>
    </div>
  )
}
