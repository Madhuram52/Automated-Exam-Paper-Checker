// NavgBar.js
import React, { useState, useEffect } from 'react';
import './NavgBar.css';
import myImage from '../Assets/Img/auto_ch.png';
import NavIconContainer from './NavbarComponents/NavIconContainer';

function NavgBar() {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 80);
        setPrevScrollpos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollpos, visible]);

    return (
        <div className={visible ? "fixed-navbar" : "fixed-navbar hidden"}>
            <a href="#" className="logo">
                <img id="logo_img" src={myImage} alt="My Image" />
            </a>
            <NavIconContainer></NavIconContainer>
        </div>
    );
}

export default NavgBar;