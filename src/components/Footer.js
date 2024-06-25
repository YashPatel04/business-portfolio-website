import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import{ IconBrandMeta,IconBrandX,IconBrandInstagram,IconBrandLinkedin } from '@tabler/icons-react';
function Footer() {
  return (
    <div className='footer-container'>
       <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Get In Touch</h2>
            <Link to='https://g.co/kgs/WBmEKcv' target='_blank'>577 Barnes Blvd STE 650, Rockledge, FL 32955</Link>
            <Link hrefLang='tel:1386XXXXXXX'>+1 386-XXX-XXXX</Link>
            <Link hrefLang='mailto:email@email.com'>email@email.com</Link>
            </div>
          </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Upcoming Projects</Link>
            <Link to='/contact'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
                <IconBrandMeta/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <IconBrandInstagram/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <IconBrandX />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <IconBrandLinkedin/>
            </Link>
          </div>
        </div>
      </section>
      <small class='website-rights'>All Rights Reserved, skmanagement © 2024</small>
    </div>
  )
}

export default Footer
