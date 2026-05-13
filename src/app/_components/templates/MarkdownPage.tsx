'use client'

import {useState} from "react";
import Header from "@/app/_components/organisms/Header";
import Footer from "@/app/_components/organisms/Footer";
import menuContext from "@/app/context/menuContext";

type Props = {
  html: string,
}

export default function MarkdownPage({html}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <menuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
      <Header/>
      <main className={'overflow-x-hidden ' + (isMenuOpen ? 'lg:block hidden' : 'block')}>
        <article
          className='prose prose-invert max-w-3xl mx-auto px-6 py-12 font-noto'
          dangerouslySetInnerHTML={{__html: html}}
        />
        <Footer/>
      </main>
    </menuContext.Provider>
  )
}
