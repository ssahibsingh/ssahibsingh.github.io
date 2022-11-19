import Link from 'next/link';
import React from 'react'

import {FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter} from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="footer__links text-center">
              <Link href="mailto:snone181@gmail.com" aria-label="Mail"><FiMail/></Link>
              <Link href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer" aria-label="Github"><FiGithub /></Link>
              <Link href="https://twitter.com/ssahibsingh_" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter/></Link>
              <Link href="https://www.instagram.com/ssahibsingh_/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></Link>
              <Link href="https://www.linkedin.com/in/ssahibsingh/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-center">
            <p className="footer__copy">Copyright &copy; {year} Sahib Singh</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer