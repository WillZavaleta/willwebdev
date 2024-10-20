import React from 'react'
import { getImageUrl } from '../../utils'

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
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}`}</h3>
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.role} Logo`} />
                                    <ul>
                                        {historyItem.descripcion.map((descrip, id) => {
                                            return <li key={id}>{descrip}</li>
                                        })}
                                        <span>{`${historyItem.precio}`}</span>
                                    </ul>
                                </div>
                            </li>
                        )
                    })

                    }
                </ul>
                <div className={styles.servicesContent}>
                    <p className={styles.serviceText}> En cualquier Proyecto Web que elijas se incluyen los siguientes servicios:</p>
                    <ul className={styles.services}>
                        {services.map((serviceItem, id) => {
                            return (
                                <li key={id} className={styles.serviceItem}>
                                    <img src={getImageUrl(serviceItem.imageSrc)} />
                                    <p>{`${serviceItem.service}`}</p>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
