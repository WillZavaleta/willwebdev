import React from 'react'
import { getImageUrl } from '../../utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import styles from "./Experience.module.css"
import history from "../../data/history.json"
import services from "../../data/services.json"

export const Experience = () => {
    return (
        <section className={styles.container} id="servicios">
            <h2 className={styles.title}>Servicios</h2>
            <p className={styles.text}>Desarrollo Web a tu medida</p>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <motion.li
                                variants={fadeIn(`${historyItem.fadein}`, 0.2)}
                                initial="aside"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}

                                key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}`}</h3>
                                    <div className={styles.containerImg}>
                                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.role} Logo`} />
                                        <div className={styles.containerprice}>
                                            <span>{`${historyItem.precio}`}</span>
                                            <span>{`${historyItem.usd}`}</span>
                                        </div>
                                    </div>
                                    <ul>
                                        {historyItem.descripcion.map((descrip, id) => {
                                            return <li key={id}>{descrip}</li>
                                        })}
                                    </ul>
                                </div>
                            </motion.li>
                        )
                    })

                    }
                </ul>
                <div className={styles.servicesContent}>
                    <p className={styles.serviceText}> En cualquier Proyecto Web que elijas se incluyen los siguientes servicios:</p>
                    <ul className={styles.services}>
                        {services.map((serviceItem, id) => {
                            return (
                                <motion.li
                                    variants={fadeIn("left", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }}

                                    key={id} className={styles.serviceItem}>
                                    <img src={getImageUrl(serviceItem.imageSrc)} />
                                    <p>{`${serviceItem.service}`}</p>
                                </motion.li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
