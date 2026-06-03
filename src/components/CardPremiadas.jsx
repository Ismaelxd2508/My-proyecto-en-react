import Elden from "../assets/Elden.png";
import Tlou2 from "../assets/Tlou2.png";
import Bgt3 from "../assets/Bgt3.png";
import Whitcher3 from "../assets/Whitcher3.png";
import Gow from "../assets/Gow.png";
import "./CardPremiadas.css"

function CardPremiadas(){
   
    return(
   
        <section className="premiadas-card">
            <div className="card">
            <img  className="card-image" src={Elden} alt="Elden" width="150" height="150" />
                <h2>Elden Ring</h2>
              
                <ul className="card-ul">
                <li>
                Lanzado en 2022</li>
                <li>324 premios al Juego del Año (GOTY) recibidos</li>
               <li> Género: Rol de acción (Action RPG) / Mundo abierto</li>
               <li> El colosal proyecto dirigido por Hidetaka Miyazaki en colaboración con el escritor George R.R. Martin logró una hazaña histórica. Su impecable diseño de mundo abierto, que castiga y premia la curiosidad a partes iguales, junto con la adictiva y desafiante jugabilidad heredada de la saga Dark Souls, lo convirtió en el videojuego que más premios individuales de "Juego del Año" ha acumulado en toda la historia de la industria.
                </li>
                </ul>
               
            </div>
            
             <div className="card">
            <img  className="card-image"  src={Tlou2} alt="Tlou2" width="150" height="150" />
                <h2>The Last of Us Part II</h2>
                
                <ul className="card-ul">
                <li>Lanzado en 2020</li>
                <li>322 premios al Juego del Año (GOTY) recibidos</li>
                <li>Género: Acción-aventura / Survival horror</li> 
               <li>Naughty Dog firmó una de las obras más crudas, maduras y técnicamente perfectas que se han visto jamás en consola. A pesar de generar una intensa polarización en las redes debido a sus atrevidas y brutales decisiones narrativas, la crítica internacional y múltiples galardones se rindieron unánimemente ante su brutal jugabilidad, su narrativa cinematográfica y un nivel de detalle obsesivo que rozaba la perfección.
                </li>
                </ul>
                
            </div>
            
            <div className="card">
            <img className="card-image"  src={Bgt3} alt="Bgt3" width="150" height="150" />
                <h2>Baldur's Gate 3</h2>
              
                <ul className="card-ul"> 
                
               <li> Lanzado en 2023</li> 
               <li>288 premios al Juego del Año (GOTY) recibidos</li> 
               <li>Género: Rol (RPG) / Estrategia por turnos</li> 
               <li> Larian Studios demostró que el rol clásico de mesa y las mecánicas basadas en Dungeons & Dragons no solo siguen vivos, sino que pueden arrasar a nivel mundial si se hacen con pasión. Su infinita libertad de elección, donde cada mínima decisión altera de forma drástica el rumbo de la historia, sumada a un carismático elenco de personajes, le valió para barrer de forma incontestable en prácticamente todas las galas y ceremonias del planeta.
                </li>
                </ul>
               
            </div>
            
            <div className="card">
            <img className="card-image"  src={Whitcher3} alt="Whitcher3" width="150" height="150" />
                <h2>The Witcher 3: Wild Hunt</h2>
                
                <ul className="card-ul">
                <li>
                Lanzado en 2015</li>
               <li> 280 premios al Juego del Año (GOTY) recibidos</li>
                <li>Género: Rol de acción (Action RPG)</li>
               <li> La aventura definitiva del brujo Geralt de Rivia se convirtió de inmediato en el estándar de oro para los juegos de rol modernos en mundo abierto. CD Projekt Red se ganó el reconocimiento absoluto del sector al diseñar un universo oscuro donde incluso las misiones secundarias más pequeñas contaban con una carga narrativa moralmente gris y profunda, estableciendo un nivel de calidad que muy pocos han logrado replicar.
                </li>
                </ul>
                
            </div>
           
            <div className="card">
            <img  className="card-image" src={Gow} alt="Gow" width="150" height="150" />
                <h2>God of War</h2>
                
                <ul className="card-ul">
                
                <li>Lanzado en 2018</li>
                <li> premios al Juego del Año (GOTY) recibidos 263</li>
                <li>Género: Acción-aventura / Hack and slash</li>
               <li> El brutal guerrero espartano Kratos regresó reconvertido en un padre melancólico y severo en este espectacular reinvención de la saga de Santa Monica Studio. Trasladar la acción a la mitología nórdica y rodar toda la aventura bajo la innovadora técnica de un plano secuencia continuo (sin cortes de cámara de principio a fin) fue una apuesta arriesgada que revolucionó la narrativa interactiva y le aseguró un puesto de honor entre las mayores obras maestras jamás creadas.
                </li>
                </ul>
               
            </div>
             
            
        </section>
)
}

export default CardPremiadas;