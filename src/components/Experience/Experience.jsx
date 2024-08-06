import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Experience.module.css"
import history from "../../data/history.json"

export const Experience = () => {
    return (
        <section className={styles.container} id="servicios">
            <h2 className={styles.title}>Servicios</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {history.map((historyItem, id)=>{
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}`}</h3>
                                    <ul>
                                        {historyItem.experiences.map((experience, id)=>{
                                            return <li key={id}>{experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        </section>
    )
}
