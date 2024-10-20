import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, Soy Will!</h1>
            <p className={styles.description}>
                Soy Programador Full-Stack con 5 años de experiencia en Desarrollo Web. Soy egresado de la Universidad Veracruzana y estoy aquí para ayudarte a destacar tu negocio o imagen en Internet. Contáctame y realicemos tu Sitio Web!
            </p>
            <a href="#contacto" className={styles.contactBtn}>Contáctame</a>
        </div>
        <img src={getImageUrl("hero/hero.jpg")} alt="Mi foto" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
