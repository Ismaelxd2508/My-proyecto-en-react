import Space from "../assets/Space.png";
import Pacman from "../assets/Pacman.png";
import dungeon from "../assets/dungeon.png";
import Street from "../assets/Street.png";
import Fornite from "../assets/Fornite.png";

import "./CardRecaudacion.css"
function CardRecaudacion(){
   
    return(
   
        <section className="Recaudacion-card">
            <div className="card">
            <img className="card-image" src={Space} alt="Space" width="150" height="150" />
                <h2>Space Invaders</h2>
                <>
                <ul className="card-ul">
                <li>Lanzado en: 1978</li> 
           <li> Recaudación: 30.000.000.000 USD</li>
           <li> Género: Shoot ‘em up (matamarcianos)</li>

           <li> Uno de los videojuegos más influyentes de la historia. Popularizó las máquinas arcade y llevó los videojuegos al público masivo. Su jugabilidad simple de disparar alienígenas lo convirtió en un éxito mundial.

           </li>
                </ul>
                </>
            </div>
            
             <div className="card"> 
            <img  className="card-image" src={Pacman} alt="Pacman" width="150" height="150" />
                <h2>Pac man</h2>
                <>
                <ul className="card-ul">
                <li>
              Lanzado en: 1980</li>
           <li> Recaudación: 14.000.000.000 USD</li>
           <li> Género: Arcade</li> 
           <li>Un clásico icónico donde controlas a Pac-Man mientras come puntos y evita fantasmas. Su diseño accesible y adictivo lo convirtió en uno de los juegos más reconocidos y rentables de todos los tiempos.
                </li>
                </ul>
                </>
            </div>
            
            <div className="card">
            <img  className="card-image" src={dungeon} alt="dungeon" width="150" height="150" />
                <h2>Dungeon Fighter Online</h2>
                <>
                <ul className="card-ul">
                <li>
               Lanzado en: 2005</li> 
               <li> Recaudación: 20.000.000.000 USD</li>
               <li> Género: RPG de acción (beat ‘em up online)</li>
               <li>Extremadamente popular en Asia, este juego online combina combate estilo arcade con progresión RPG. Su modelo free-to-play generó ingresos masivos durante años.
                </li>
                </ul>
                </>
            </div>
            <div className="card">
            <img  className="card-image" src={Fornite} alt="Fornite" width="150" height="150" />
                <h2>Fornite</h2>
                <>
                <ul className="card-ul">
                <li>Lanzado en: 2017</li>
               <li> Recaudación: +20.000.000.000 USD</li>
               <li> Género: Battle Royale</li>  
                <li>Uno de los juegos más exitosos de la era moderna. Popularizó el battle royale y genera enormes ingresos mediante eventos y microtransacciones.
                </li>
                </ul>
                </>
            </div>

            <div className="card">
            <img  className="card-image" src={Street} alt="skyfall" width="150" height="150" />
                <h2>Street Fighter II</h2>
                <>
                <ul className="card-ul">
                <li>
                Lanzado en: 1991</li> 
               <li>Recaudación: +10.000.000.000 USD</li>
               <li>Género: Lucha</li> 
<li>Revolucionó los juegos de pelea y dominó las arcades en los años 90. Su sistema de combate competitivo lo convirtió en un fenómeno mundial.
                </li>
                </ul>
                </>
            </div>
           
            
             
            
        </section>
)
}

export default CardRecaudacion;