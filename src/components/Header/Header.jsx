import React, { Component } from 'react'
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <header>
                <h1 className={style.header}>Header</h1> 
            </header>
        )
    }
}

export default Header