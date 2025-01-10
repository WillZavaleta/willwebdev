import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils'
import 'animate.css';

export const Navbar = () => {
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <a to="/" className={`${styles.title} ${'animate__animated animate__bounce'}`}><img className={styles.logo} src={getImageUrl("logo.png")} alt="" /></a>
            
            <div className={styles.menu} onClick={()=>{
                setMenuOpen(!menuOpen)
                menuOpen ? setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`) : setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            }}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
            <ul className={`${menuOpen ? styles.open : ""} ${'animate__animated animate__fadeInDown animate__delay-1s'}`}>
                <li>
                    <a href="#desarrollador-web-freelance-xalapa">Habilidades</a>
                </li>
                <li>
                    <a href="#venta-de-paginas-web-xalapa">Servicios</a>
                </li>
                <li>
                    <a href="#ventajas-de-tener-una-pagina-web">Ventajas</a>
                </li>
                <li>
                    <a href="#contacto-diseñador-web-xalapa">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}
