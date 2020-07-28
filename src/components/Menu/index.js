import React from 'react';
import Logo from '../../assets/techflixLogo.png';
import './Menu.css';
import Button from '../Button/index.js'

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="TechFlix Logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;