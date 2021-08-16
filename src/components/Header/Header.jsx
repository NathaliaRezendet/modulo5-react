import React, { Component } from 'react'
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                <ul className={style.header}>
                    <li>Drinks</li>
                    <li>About us</li>
                    <li className={style.logo}>Drinks</li>
                    <li>Our team</li>
                    <li>Contact</li>
                </ul> 
                </nav>
            </header>
        )
    }
}

export default Header