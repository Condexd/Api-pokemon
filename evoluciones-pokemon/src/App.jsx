//Componentes:
import {Button} from "./components/Button"
import { Card } from "./components/Card";
//Estilos:
import'./sass/App.scss'
//Iconos:
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";
//Hooks:
import { useState } from "react";


const App = () =>{
    
    const [pokemonId, setPokemonId] = useState(1);

    function prevClick(){
        (pokemonId === 1)?
            setPokemonId(1):
            setPokemonId(pokemonId -1)    
    }

    function nextClick(){
        setPokemonId(pokemonId +1)
    }

    return(
        <>
            {/* tarjetas */}
            <div className="buttons-container">
                <Button 
                    icon={<TiArrowLeftThick />} 
                    handleClick={prevClick}
                />
                {pokemonId}
                <Button 
                    icon={<TiArrowRightThick/>}
                    handleClick={nextClick}
                />
            </div>
        </>
        )
}

export{App}