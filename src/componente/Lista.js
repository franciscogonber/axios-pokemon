import React, { useState } from 'react'
import axios from 'axios'


const Lista = () => {
    const [lista, setLista] = useState([])
    const obtenerPokemones = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10000")
            .then(response => {
                setLista(response.data.results);
            })
    }
    return (
        <div>
            <button className='btn btn-secondary' onClick={obtenerPokemones}>Fetch Pokemon</button>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Lista
