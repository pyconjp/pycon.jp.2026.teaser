'use client'

import HeroSection from "@/app/_components/sections/HeroSection";
import SubSection from "@/app/_components/sections/SubSection";
import ContactSection from "@/app/_components/sections/ContactSection";
import Header from "@/app/_components/organisms/Header";
import Footer from "@/app/_components/organisms/Footer";
import './globals.css'
import {useState} from "react";
import menuContext from "@/app/context/menuContext";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <menuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
      <Header/>
      <main className={'overflow-x-hidden ' + (isMenuOpen ? 'lg:block hidden' : 'block')}>
        <HeroSection/>
        <SubSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </menuContext.Provider>
  )
}
