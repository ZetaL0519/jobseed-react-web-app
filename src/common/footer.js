import React from 'react';
import './footerstyle.css';

const Footer = () => {
    return (
   <footer className="footer">
        <div className="container">
            <span className="text-muted">
                Designed by &nbsp;
                <a href="https://github.com/ZetaL0519"
                   target="_blank"
                   rel="noopener noreferrer" >
                    <i className="fab fa-github">&nbsp;</i>
                    @ZetaL @Yi
                </a>
            </span>
            <span className="text-muted">
                Developed by &nbsp;
                <a href="https://github.com/ZetaL0519"
                   target="_blank"
                   rel="noopener noreferrer" >
                    <i className="fab fa-github">&nbsp;</i>
                    @ZetaL @Yi
                </a>
            </span>
        </div>
    </footer>
    )
}

export default Footer;