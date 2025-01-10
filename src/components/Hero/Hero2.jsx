import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'
import 'animate.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containertext}>
      <div className={`${styles.content} ${'animate__animated animate__fadeInLeft animate__delay-3s'}`}>
            <h1 className={styles.title}>Hi, I'm Will!</h1>
            <p className={styles.description}>
                I'm a full stack web developer with more than five years of experience. If you are looking for a reliable developer who can bring your web projects to life, let's connect and build something great together!
            </p>
            <a href="#contacto" className={styles.contactBtn}>Contáctame</a>
        </div>
       
        <img src={getImageUrl("hero/hero.jpg")} alt="Mi foto" className={` ${'animate__animated animate__fadeInRight animate__delay-3s'} ${styles.heroImg}`}/>        

      </div>

        <div className={styles.contenedorhabilidades}>
          <img src={getImageUrl("skills/html.png")}/>  
          <img src={getImageUrl("skills/css.png")}/>  
          <img src={getImageUrl("skills/javascript.png")}/>  
          <img src={getImageUrl("skills/react.png")}/> 
          <img src={getImageUrl("skills/node.png")}/>        

        </div>

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
