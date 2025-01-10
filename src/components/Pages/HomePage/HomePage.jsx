import React from 'react'
import { About } from '../../About/About'
import { Contact } from '../../Contact/Contact'
import { Experience } from '../../Experience/Experience'
import { Hero } from '../../Hero/Hero'
import { Navbar } from '../../Navbar/Navbar'
import { Ventajas } from '../../Ventajas/Ventajas'

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About/>
        <Experience/>
        <Ventajas/>
        <Contact/>
    </>
  )
}
