import React from 'react';
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SidebarItem = ({ title, icon, links, href }) => (
    <React.Fragment>
        <li className="nav-item section-title mt-3">
                <HashLink to={href}>
                        <span className="nav-link scrollto active">
                                <span className="theme-icon-holder me-2"><FontAwesomeIcon icon={icon} fixedWidth /></span>
                                { title }
                        </span>
                </HashLink>
        </li>
        {
            links.map(link => (
                <li key={link.href} className="nav-item">
                        <HashLink to={link.href}>
                                <span className="nav-link scrollto">{link.label}</span>
                        </HashLink>
                </li>
            ))
        }
    </React.Fragment>
);

export default SidebarItem;