import { FloatingWhatsApp } from 'react-floating-whatsapp';
import styles from './App.module.css'
import { getImageUrl } from './utils'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Ventajas } from './components/Ventajas/Ventajas'

function App() {
  return (
    
      <div className={styles.App}>
        <FloatingWhatsApp 
          phoneNumber={"+522283556682"} 
          accountName={"WillWebDev"} 
          statusMessage={"Normalmente responde en menos de 30 min"} 
          chatMessage={"Hola! 🤝 \n Cómo puedo ayudarte?"} 
          placeholder={"Escribe un mensaje"} 
          darkMode={false} 
          avatar={getImageUrl("hero/hero.jpg")}
        />

        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Ventajas />
        <Contact />
      </div>
    
  )
}

export default App
