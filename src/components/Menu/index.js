import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/techflixLogo.png';
import './Menu.css';
import Button from '../Button/index.js'

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TechFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;