import Tetris from "../assets/Tetris.png";
import Minecraft from "../assets/Minecraft.png";
import Roblox from "../assets/Roblox.png";
import GTA5 from "../assets/GTA5.png";
import LOL from "../assets/LOL.png";
import "./CardPopulares.css";



function CardPopulares(){
   
    return(
   
        <section className="populares-contenedor">
            <div className="card">
            <img className="card-image" src={Tetris} alt="Tetris" width="150" height="150" />
                <h2 >Tetris</h2>
                
                <ul className="card-ul">
                <li>
                Lanzado en 1984</li>
               <li> 520.000.000 de copias vendidas</li>
               <li> Género: Puzle</li>
               <li> El rey indiscutible de la accesibilidad y el juego más vendido de todos los tiempos si contamos sus infinitas versiones. Desde las primeras máquinas soviéticas y el fenómeno de la Game Boy hasta los móviles actuales, su fórmula perfecta de encajar piezas ha mantenido enganchadas a tres generaciones de jugadores.
                </li>
                </ul>
               
            </div>
            
             <div className="card">
            <img className="card-image"  src={Minecraft} alt="Minecraft" width="150" height="150" />
                <h2> Minecraft</h2>
                
                <ul className="card-ul" >
                <li>
                Lanzado en 2011</li>
                <li>350.000.000 de copias vendidas</li>
               <li> Género: Sandbox / Supervivencia</li>
               <li> Si evaluamos un solo lanzamiento individual, Minecraft es el mayor éxito de la historia. Lo que empezó como un modesto proyecto independiente de bloques interactivos se transformó en el patio de recreo virtual definitivo del siglo XXI, siendo hoy tanto una herramienta educativa como un pilar masivo de la cultura de internet.
                </li>
                </ul>
               
            </div>
            
            <div className="card">
            <img className="card-image"  src={Roblox} alt="Roblox" width="150" height="150" />
                <h2 >Roblox</h2>
                
                <ul className="card-ul">
                <li>
                Lanzado en 2006</li>
                <li>380.000.000 de usuarios activos mensuales</li>
               <li> Género: Plataforma de juegos / MMO</li>
               <li> Más que un videojuego, es un universo de experiencias creadas por los propios usuarios que rompe récords de permanencia año tras año. Al permitir que cualquiera programe y comparta sus propios mundos, se ha consolidado como la plataforma social y de entretenimiento digital más concurrida del planeta.
                </li>
                </ul>
               
            </div>
            
            <div className="card">
            <img className="card-image"  src={GTA5} alt="GTA5" width="150" height="150" />
                <h2 >Grand Theft Auto V</h2>
                
                <ul className="card-ul">
               <li> Lanzado en 2013</li>
               <li> 225.000.000 de copias vendidas</li>
               <li> Género: Acción / Mundo abierto</li>
               <li>El producto de entretenimiento que más rápido ha alcanzado los mil millones de dólares en la historia de la humanidad. Su gigantesco mapa de Los Santos, una narrativa satírica impecable y un modo online en constante evolución le han permitido mantenerse como uno de los títulos más jugados a través de tres generaciones distintas de consolas.
                </li>
                </ul>
               
            </div>
           
            <div className="card">
            <img className="card-image"  src={LOL} alt="LOL" width="150" height="150" />
                <h2 >League of Legends</h2>
               
                <ul className="card-ul" >
                <li>Lanzado en 2009</li>
               <li> 117.000.000 de usuarios activos mensuales</li>
                <li>Género: MOBA / Estrategia en tiempo real</li>
              <li> El corazón y alma de los deportes electrónicos (esports) a nivel global. El mapa de la Grieta del Invocador sigue atrayendo a una masa colosal de jugadores competitivos cada día gracias a su profundidad táctica, actualizaciones constantes y un ecosistema competitivo internacional que llena estadios reales en todo el mundo.
                </li>
                </ul>
               
            </div>
             
            
        </section>
)
}

export default CardPopulares;