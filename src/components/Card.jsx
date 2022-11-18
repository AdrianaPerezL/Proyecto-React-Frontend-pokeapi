import axios from 'axios'
import React from 'react'
import "./style.css"
import { useState, useEffect } from 'react'

export default function Card(props) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: { other:{"official-artwork": {front_default:''}}},
        types:[{type:[]}]

    })

    const[mostrar, setMostrar] = useState(false)

/*     _handleKeyDown = (e) => {
        setMostrar({show:!mostrar})
  } */
    
    const getPokemon = (url) => {

        axios.get(url)
            .then((response) => {
                console.log(response.data)
                setOnePokemon(response.data)
            })
    }

    useEffect(() => {
        getPokemon(props.url)

    }, [])

    return (
        
        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={onePokemon.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3>{onePokemon.name}</h3>
                <div>
                    <p className="parrafo">Weight: {onePokemon.weight}Kg</p>
                    <p className="parrafo">Height: {onePokemon.height}m</p>
                    <p className="parrafo">Type: {onePokemon.types[0].type.name}</p>


                </div>
            </div>
            
        </div>
    )
}

