import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { getImageUrl } from '../../utils'

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
            <footer id="contacto" className={styles.container}>
                <div className={styles.text}>

                    <h2>Contacto</h2>
                    <p>Comunícate conmigo!</p>

                    <ul className={styles.links}>
                        <li className={styles.link}>
                            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                            <a href="mailto:zavaleta.will@gmail.com">zavaleta.will@gmail.com</a>
                        </li>
                        <li className={styles.link}>
                            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                            <a href="">github.com/myname</a>
                        </li>
                        <li className={styles.link}>
                            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked icon" />
                            <a href="">linked.com/myname</a>
                        </li>
                    </ul>


                </div>
                <form ref={form} className={`${styles.formulario}`} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="message" />
                    <input type="submit" value="Enviar" />
                </form>
                <div className={styles.bottomBlur}></div>


            </footer>
            <div className={styles.marca}>
                <img className={styles.logo} src={getImageUrl("logo.png")} alt="" /><p> | 2024</p>
            </div>

        </>


    )
}
