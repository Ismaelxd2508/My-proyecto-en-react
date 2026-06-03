import Mario from "../assets/Mario.png";
import Pokemon from "../assets/pokemon.png";
import Cod from "../assets/Cod.png";
import Gta from "../assets/Gta.png";
import Fifa from "../assets/Fifa.png";

import "./CardSagas.css"
function CardSagas(){
   
    return(
   
        <section className="Sagas-card">
            <div className="card">
            <img className="card-image" src={Mario} alt="Mario" width="150" height="150" />
                <h2>Mario</h2>
                
                <ul className="card-ul">
                
               <li> Iniciada en 1981</li>
               <li> Más de 939.000.000 de copias vendidas (Ingresos: ~$53.850 millones)</li>
              <li>  Género: Plataformas / Varios</li>
              <li> El fontanero bigotudo de Nintendo es el rey indiscutible y el rostro absoluto de la industria. Lo que comenzó como un humilde rescatador de princesas pixeladas se expandió hasta dominar las carreras con Mario Kart, las fiestas con Mario Party y los deportes, logrando que prácticamente cualquier juego que lleve su nombre se convierta de inmediato en un éxito de ventas intergeneracional.
                </li>
                </ul>
                
            </div>
            
             <div className="card">
            <img className="card-image" src={Pokemon} alt="Pokemon" width="150" height="150" />
                <h2>Pokémon</h2>
                
                <ul className="card-ul">
                <li>
                Iniciada en 1996</li>
               <li> Más de 515.000.000 de copias vendidas (Ingresos: ~$35.400 millones)</li>
               <li> Género: Rol (RPG) / Colección de criaturas</li>
              <li>  La franquicia que desató una auténtica fiebre mundial a finales de los 90 sigue siendo una máquina imparable de generar ingresos. Su adictiva premisa de "hacerse con todos" viajando por distintas regiones para capturar y evolucionar monstruos de bolsillo no solo domina las consolas de Nintendo con cada nueva entrega, sino que se ha consolidado como la propiedad intelectual más valiosa del entretenimiento digital.
                </li>
                </ul>
              
            </div>
            
            <div className="card">
            <img className="card-image" src={Cod} alt="Cod" width="150" height="150" />
                <h2>Call of Duty</h2>
                
                <ul className="card-ul">
                <li>
                Iniciada en 2003</li>
               <li> Más de 500.000.000 de copias vendidas (Ingresos: ~$35.000 millones)</li> 
               <li>Género: Disparos en primera persona (FPS)</li> 
               <li>El titán de la acción bélica es el equivalente a un taquillazo de Hollywood lanzado de forma anual. Con su transición desde los campos de batalla de la Segunda Guerra Mundial hasta los conflictos modernos y futuristas, la saga ha construido un imperio financiero gracias a sus frenéticos modos multijugador y al fenómeno gratuito de Warzone, garantizando millones de jugadores activos cada temporada.
                </li>
                </ul>
                
            </div>
            
            <div className="card">
            <img className="card-image" src={Gta} alt="Gta" width="150" height="150" />
                <h2>Grand Theft Auto (GTA)</h2>
                
                <ul className="card-ul">
                <li>
                Iniciada en 1997</li> 
               <li>Más de 470.000.000 de copias vendidas (Ingresos: ~$11.890 millones)</li>
                <li>Género: Acción-aventura / Mundo abier</li>to
               <li> Ninguna otra saga genera tanto revuelo cultural, expectación y debate en los medios como la obra cumbre de Rockstar Games. Su propuesta de libertad absoluta, crimen organizado y sátira ácida de la sociedad estadounidense revolucionó el concepto de "mundo abierto", logrando que cada lanzamiento detenga la industria por completo y rompa récords de recaudación que parecían imposibles.
                </li>
                </ul>
                
            </div>
           
            <div className="card">
            <img className="card-image" src={Fifa} alt="Fifa" width="150" height="150" />
                <h2>FIFA</h2>
                
                <ul className="card-ul">
                <li>Iniciada en 1993</li>
                <li>Más de 325.000.000 de copias vendidas (Ingresos: ~$12.500 millones)</li> 
               <li>Género: Deportes / Simulación de fútbol</li> 
               <li>El simulador de fútbol por excelencia es una cita obligatoria para millones de apasionados del deporte en todo el mundo. A pesar de su reciente y sonado cambio de nombre comercial, la franquicia de Electronic Arts mantiene un monopolio absoluto en el mercado gracias a sus licencias oficiales y, sobre todo, al lucrativo ecosistema competitivo de su modo Ultimate Team, que genera miles de millones de manera constante.
                </li>
                </ul>
                
            </div>
             
            
        </section>
)
}

export default CardSagas;