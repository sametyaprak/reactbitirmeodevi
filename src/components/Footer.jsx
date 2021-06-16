import React from 'react'
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();  
    return (
        <footer>
            <p>Copyright{year}© sametyaprak@gmail.com</p>
        </footer>
    )
}
export default Footer;