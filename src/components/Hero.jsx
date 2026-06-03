import { useState } from "react";
import CardPremiadas from "./CardPremiadas";
import CardRecaudacion from "./CardRecaudacion";
import CardSagas from "./CardSagas";
import CardPopulares from "./CardPopulares";
import "./Hero.css";




function Hero() {
  
  const [Premiadas, setPremiadas] = useState(false);
  const [Recaudacion, setRecaudacion] = useState(false);
  const [Sagas, setSagas] = useState(false);
  const [populares, setPopulares] = useState(false);
  

  return (
    
      <section className="hero">
        
        <h2 className="hero-title">Acerca de los videojuegos</h2>
        
          <p className="hero-description">
           Una sección dedicada a destacar lo mejor de la industria de los videojuegos a lo largo de los años, donde podrás explorar los títulos más importantes y reconocidos por su impacto, calidad e innovación. 
          Aquí se incluyen los juegos más populares que han conquistado a millones de jugadores en todo el mundo, aquellos que han alcanzado la mayor recaudación y éxito comercial, así como las sagas más exitosas que han perdurado en el tiempo con múltiples entregas destacadas.
           Además, se presentan los videojuegos más premiados, que han acumulado numerosos reconocimientos y se han consolidado como verdaderas obras maestras dentro de la industria.</p>
        
        <div>
          <button className = "herobutton" onClick={() => setPremiadas(!Premiadas)}>
            {Premiadas? 'Cerrar' : 'Juegos Premiados'}
          </button>
     
          {Premiadas && ( <CardPremiadas/> )}
        
        </div> 

        <div>     
           <button className = "herobutton" onClick={() => setRecaudacion(!Recaudacion)}>
            {Recaudacion ? 'Cerrar' : 'Mayor Recaudacion'}
          </button>
     
          {Recaudacion && (<CardRecaudacion/>)}
        </div> 

       <div >  
           <button className = "herobutton" onClick={() => setSagas(!Sagas)}>
            {Sagas ? 'Cerrar' : 'Sagas Exitosas'}
          </button>
     
          {Sagas && (<CardSagas/>)}
        </div> 


        <div > 
          <button className = "herobutton" onClick={() => setPopulares(!populares)}>
            {populares ? 'Cerrar' : 'Los Juegos Mas Populares'}
          </button>
     
          {populares && (<CardPopulares/>)}
         </div> 
      
      
      </section> 
    
  )
}

export default Hero;