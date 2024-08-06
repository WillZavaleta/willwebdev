import React from 'react'

import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
import skills from "../../data/skills.json"

export const About = () => {
    return (
        <section className={styles.container} id="habilidades">
            <h2 className={styles.title}>Habilidades</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrollador Frontend</h3>
                            <p>Soy un desarrollador front-end con experiencia en desarrollo de sitios web responsivos y optimizados</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrollador Backend</h3>
                            <p>Tengo experiencia desarrollando API's y sistemas back-end óptimos y eficaces</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Diseñador UI</h3>
                            <p>He diseñado landing pages y sitios web personalizados con diseño único</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}
