import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <a to="/" className={styles.title}><img className={styles.logo} src={getImageUrl("logo.png")} alt="" /></a>
            
            <div className={styles.menu} onClick={()=>{
                setMenuOpen(!menuOpen)
                menuOpen ? setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`) : setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            }}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
            <ul className={`${menuOpen ? styles.open : ""}`}>
                <li>
                    <a href="#habilidades">Habilidades</a>
                </li>
                <li>
                    <a href="#servicios">Servicios</a>
                </li>
                <li>
                    <a href="#ventajas">Ventajas</a>
                </li>
                <li>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}
