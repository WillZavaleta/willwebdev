import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'
import 'animate.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${'animate__animated animate__fadeInLeft animate__delay-3s'}`}>
        <h1 className={styles.title}>Desarrollo de Páginas Web Profesionales <span>en Xalapa, Veracruz</span></h1>
        <p className={styles.description}>
          Hola, soy Williams Zavaleta Vázquez! Soy Programador Full-Stack con 5 años de experiencia en Desarrollo Web. Estoy aquí para ayudarte a destacar tu negocio o imagen en Internet. Ponte en contacto y realicemos tu Sitio Web!
        </p>
        <div className={styles.containerCedula}>
          <ul className={styles.cedula}>
            {/* <li>Lic. en Informática</li> */}
            <li>Cédula: 9190609</li>
            <li>Universidad Veracruzana</li>
          </ul>
          <a href="#contacto-diseñador-web-xalapa" className={styles.contactBtn}>Contáctame</a>
        </div>
      </div>

      <img src={getImageUrl("hero/hero.jpg")} alt="Diseñador de sitios web Xalapa" className={` ${'animate__animated animate__fadeInRight animate__delay-3s'} ${styles.heroImg}`} />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
