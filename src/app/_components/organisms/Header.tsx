'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/Header.module.scss";
import {Conference, MenuItems} from "@/app/variables";
import {useContext} from "react";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import menuContext from "@/app/context/menuContext";

export default function Header() {
  const {isMenuOpen, setIsMenuOpen} = useContext(menuContext);

  return (
    <header className='z-10 sticky'>
      <div className={'mx-auto h-16 w-11/12 items-center justify-between ' + (isMenuOpen ? 'hidden lg:flex' : 'flex')}>
        <div className='flex items-center justify-center w-1/6'>
          <img src='/header-logo.png' alt={Conference.name} className='h-10 w-10'/>
        </div>
        <nav className='lg:flex hidden items-center w-4/6'>
          <ul className={`flex justify-between w-full ${styles.headerString}`}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  {item.url ? <a href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a> :
                    <span className='cursor-default opacity-50'>{item.name}</span>}
                </li>
              )
            })}
          </ul>
        </nav>
        <div className='lg:flex hidden items-center justify-center w-1/6 gap-4'>
          <a href='https://www.facebook.com/PyConJP'>
            <FontAwesomeIcon icon={faFacebook} className='w-6 h-6'/>
          </a>
          <a href='https://twitter.com/pyconjapan'>
            <FontAwesomeIcon icon={faXTwitter} className='w-6 h-6'/>
          </a>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} className='h-6 text-primary-800 mx-auto'/>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='lg:hidden block w-screen t-0 left-0 min-h-screen bg-black z-40 absolute'>
          <button className='float-right mr-5 mt-5'>
            <FontAwesomeIcon icon={faXmark} className='h-12 text-primary-500 z-50'
                             onClick={() => setIsMenuOpen(false)}/>
          </button>
          <nav className='mt-20 mx-14 py-1 bg-secondary-50 rounded shadow'>
            <ul className='flex items-center text-center flex-col gap-4'>
              {
                MenuItems.map((item, index) => (
                  <li key={index}>
                    {item.url ? <a href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a> :
                      <span className='cursor-default opacity-50'>{item.name}</span>}
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className='flex items-center justify-center mt-8 gap-6 w-full'>
            <a href='https://www.facebook.com/PyConJP'>
              <FontAwesomeIcon icon={faFacebook} className='w-6 h-6'/>
            </a>
            <a href='https://twitter.com/pyconjapan'>
              <FontAwesomeIcon icon={faXTwitter} className='w-6 h-6'/>
            </a>
          </div>
          <div className='flex items-center justify-center w-full mt-6'>
            <img src='/header-logo.png' alt={Conference.name} className='h-10 w-10'/>
          </div>
        </div>
      )}
    </header>
  );
}