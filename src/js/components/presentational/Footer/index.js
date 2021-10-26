import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="footer">

        <div className="footer-bottom text-center py-5">

            <ul className="social-list list-unstyled pb-4 mb-0">
                <li className="list-inline-item"><a href="https://github.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="https://linkedin.com/company/mav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth /></a></li>
                <li className="list-inline-item"><a href="https://mav3rikworkspace.slack.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'slack']} fixedWidth /></a></li>
            </ul>

            <small className="copyright">© 2021 Mav3rik Pty Ltd.</small>
            <br/>
            {/*This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :)*/}
            <small className="copyright">CoderDocs template designed with <FontAwesomeIcon icon={['fas', 'heart']} style={{color: '#fb866a'}} /> by <a
                className="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for
                developers</small>
            <br/>
            <small className="copyright">Re-designed with <FontAwesomeIcon icon={['fab', 'react']} style={{color: '#61DBFB'}}/> by the developers of <a
                className="theme-link" href="https://mav3rik.com" target="_blank">Mav3rik</a></small>

        </div>

    </footer>
);

export default Footer;