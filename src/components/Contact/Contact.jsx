import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { getImageUrl } from '../../utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { NavLink } from 'react-router-dom'

import styles from './Contact.module.css'

export const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1z48poh', 'template_yf6295u', form.current, {
                publicKey: 'R_IJQ7jNL8oZySemU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    //Swal.fire("¡Mensaje Enviado!", "¡Pronto nos pondremos en contacto contigo!", "success");
                    Swal.fire({
                        showCloseButton: true,
                        icon: "success",
                        title: "¡Mensaje Enviado!",
                        text: "¡Pronto me pondré en contacto contigo!",
                        showConfirmButton: true,
                        confirmButtonText: "Continuar",
                        confirmButtonColor: "#2e2d2d",
                        background: "linear-gradient(180deg, #2e2d2d 0%, #ec2c2f 100%)",
                        color: "#fff",
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <footer id="contacto-diseñador-web-xalapa" className={styles.container}>
                <div className={styles.text}>

                    <h2>Contacto</h2>
                    <p>Comunícate conmigo!</p>

                    <ul className={styles.links}>
                        <motion.li
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className={styles.link}>
                            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                            <a href="mailto:zavaleta.will@gmail.com">zavaleta.will@gmail.com</a>
                        </motion.li>
                        <motion.li
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className={styles.link}>
                            <img src={getImageUrl("contact/instagram.png")} alt="Instagram icon" />
                            <a href="https://instagram.com/will.zavaleta">instagram.com/will.zavaleta</a>
                        </motion.li>
                        <motion.li
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className={styles.link}>
                            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                            <a href="https://github.com/WillZavaleta">github.com/WillZavaleta</a>
                        </motion.li>
                    </ul>


                </div>
                <form ref={form} className={`${styles.formulario}`} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" required/>
                    <label>Email</label>
                    <input type="email" name="user_email" required/>
                    <label>Mensaje</label>
                    <textarea name="message" required/>
                    <input type="submit" value="Enviar" />
                </form>
                <div className={styles.bottomBlur}></div>

                <div className={styles.enlaces}>
                <NavLink to="/paginas-web-xalapa"></NavLink>
                <NavLink to="/diseño-de-paginas-web-xalapa"></NavLink>
                <NavLink to="/venta-de-paginas-web-en-xalapa"></NavLink>
                <NavLink to="/venta-de-paginas-web-xalapa"></NavLink>
                <NavLink to="/desarrollo-de-paginas-web-xalapa"></NavLink>
                <NavLink to="/paginas-web-veracruz"></NavLink>
                <NavLink to="/venta-de-paginas-web-veracruz"></NavLink>
                <NavLink to="/diseño-de-paginas-web-veracruz"></NavLink>
                </div>

            </footer>
            <div className={styles.marca}>
                <img className={styles.logo} src={getImageUrl("logo.png")} alt="" /><p> | 2024</p>
            </div>

        </>


    )
}
