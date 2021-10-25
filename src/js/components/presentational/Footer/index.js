import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="footer">

        <div className="footer-bottom text-center py-5">

            <ul className="social-list list-unstyled pb-4 mb-0">
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'github']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'slack']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'product-hunt']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth /></a></li>
            </ul>

            {/*This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :)*/}
            <small className="copyright">Designed with <FontAwesomeIcon icon={['fas', 'heart']} style={{color: '#fb866a'}} /> by <a
                className="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for
                developers</small>
            <br />
            <small className="copyright">Re-designed with <FontAwesomeIcon icon={['fab', 'react']} style={{color: '#61DBFB'}}/> by the developers of <a
                className="theme-link" href="https://mav3rik.com" target="_blank">Mav3rik</a></small>


        </div>

    </footer>
);

export default Footer;