import React, { Component } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                <ul className={style.header}>
                    <Link to="drinks">Drinks</Link>
                    <li>About us</li>
                    <Link to="home" className={style.logo}>Drinks</Link>
                    <li>Our team</li>
                    <Link to="contact">Contact</Link>
                </ul> 
                </nav>
            </header>
        )
    }
}

export default Header