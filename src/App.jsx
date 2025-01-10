import { Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import styles from './App.module.css'
import { getImageUrl } from './utils'
import { HomePage } from './components/Pages/HomePage/HomePage';

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
        {/* <Home /> */}

        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />}/>            
            <Route path="/paginas-web-xalapa" element={<HomePage />}/>
            <Route path="/diseño-de-paginas-web-xalapa" element={<HomePage />}/>
            <Route path="/venta-de-paginas-web-en-xalapa" element={<HomePage />}/>
            <Route path="/venta-de-paginas-web-xalapa" element={<HomePage />}/>
            <Route path="/desarrollo-de-paginas-web-xalapa" element={<HomePage />}/>
            <Route path="/paginas-web-veracruz" element={<HomePage />}/>
            <Route path="/venta-de-paginas-web-veracruz" element={<HomePage />}/>
            <Route path="/diseño-de-paginas-web-veracruz" element={<HomePage />}/>

            
            <Route path="/desarrollador-web-freelance-xalapa" element={<HomePage />}/>
            <Route path="/venta-de-paginas-web-xalapa" element={<HomePage />}/>
            <Route path="/ventajas-de-tener-una-pagina-web" element={<HomePage />}/>
            <Route path="/contacto-diseñador-web-xalapa" element={<HomePage />}/>
        </Routes> 

        
      </div>
    
  )
}

export default App
