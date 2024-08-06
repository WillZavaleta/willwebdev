import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './Ventajas.module.css'
import ventajas from "../../data/ventajas.json"

export const Ventajas = () => {
    return (
        <section className={styles.container} id="ventajas">
            <h2 className={styles.title}>Ventajas de tener una Página Web</h2>
            <div className={styles.content}>
                <ul className={styles.ventajas}>
                    {ventajas.map((ventajaItem, id)=>{
                        return (                            
                            <li key={id} className={`${id % 2 == 0 ? styles.ventajaItem1:styles.ventajaItem2}`}>
                                <div className={styles.ventajaItemText}>
                                    <h3 className={`${id % 2 == 0 ? styles.ventajaItemTitle1:styles.ventajaItemTitle2}`}>{`${ventajaItem.ventaja}`}</h3>
                                    <div className={styles.ventajaItemDetails}>                                    
                                        <p>
                                        {`${ventajaItem.descripcion}`}
                                        </p>                                        
                                    </div>
                                </div>                                
                                <img className={`${id % 2 == 0 ? styles.ventajaImg1:styles.ventajaImg2}`} src={getImageUrl(ventajaItem.imageSrc)} alt={`${ventajaItem.ventaja} Logo`} />
                                <div className={`${id % 2 == 0 ? styles.backBlur1:styles.backBlur2}`}></div>                                
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </section>
    )
}
