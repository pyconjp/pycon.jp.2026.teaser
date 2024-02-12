import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
    <header className='z-10 sticky bg-black'>
      <div className='flex mx-auto h-16 w-11/12'>
        <div className='flex items-center justify-center w-1/6'>
          <img src='/header-logo.png' alt='header-logo' className='h-10 w-10'/>
        </div>
        <nav className='flex items-center w-4/6'>
          <ul className={`flex justify-between w-full ${styles.headerString}`}>
            <li>
              <a href='#'>NEWS</a>
            </li>
            <li>
              <a href='#'>VOLUNTEER</a>
            </li>
            <li>
              <a href='#'>PROPOSAL</a>
            </li>
            <li>
              <a href='#'>SPONSOR</a>
            </li>
            <li>
              <a href='#'>TICKET</a>
            </li>
            <li>
              <a href='#'>REVIEWER</a>
            </li>
            <li>
              <a href='#'>CODE OF CONDUCT</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-center w-1/6 gap-4'>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook} className='w-6 h-6'/>
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faXTwitter} className='w-6 h-6'/>
          </a>
        </div>
      </div>
    </header>
  );
}