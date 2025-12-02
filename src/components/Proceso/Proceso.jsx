import { section } from 'framer-motion/client'
import React from 'react'
import styles from './Proceso.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import proceso from "../../data/proceso.json"
import { getImageUrl } from '../../utils'

export const Proceso = () => {
    return (
        <section className={styles.container} id="proceso-de-compra-de-proyecto-web">
            <h2 className={styles.title}>Proceso de Compra</h2>
            <div className={styles.content}>
                <ul className={styles.procesoItems}>
                    {proceso.map((proceso, id) => {
                        return (
                            <motion.li
                                variants={fadeIn(`${proceso.fadein}`, 0.2)}
                                initial="aside"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}

                                key={id} className={styles.procesoItem}>
                                <img src={getImageUrl(proceso.imageSrc)} alt={proceso.title} />
                                <div className={styles.procesoItemText}>
                                    <h3>{proceso.title}</h3>
                                    <p>{proceso.description}</p>
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}
