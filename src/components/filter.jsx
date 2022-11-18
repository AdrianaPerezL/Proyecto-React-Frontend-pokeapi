import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Filter (){
    const [onePokemon, setOnePokemon] = useState([
        {
        name: 'bulbasaur', type: 'https://pokeapi.co/api/v2/type/'
        
    }
]);

/* const [search, setSearch] = useState("");
 */const [filtroStatus, setFiltroStatus] = useState("");

const getPokemon = () =>{
    axios.get('https://pokeapi.co/api/v2/type/')
    .then((response) =>{
        console.log(response.data.results);
        setOnePokemon(response.data.results);

    })
    .catch((err) => {console.log(err);})
}

const handleChange = event =>{
/*     setSearch(event.target.value);
 */    filtrar(event.target.value);
}

const filtrar=(nameonePokemon)=>{
    let resultBusqueda = onePokemon.filtrar((elemento)=>{
        if(elemento.name.toString().toLowerCase().includes(nameonePokemon.toLowerCase())){
            return elemento;
        }
    }
    );
    setOnePokemon(resultBusqueda);
}

const handleCargarbyStatus = event =>{
    setFiltroStatus(event.target.value);
    filtrarStatus(event.target.value);
}

const filtrarStatus = (statusonePokemon)=>{
    let resultStatus = onePokemon.filter((item) =>{
        if(statusonePokemon === 'grass'){
            return item.type === 'grass';
        }else if(statusonePokemon === 'water'){
            return item.status === 'water';
        }else if(statusonePokemon === 'fire'){
            return item.status === 'fire';
        }else{
            return item;
        }
    });

    setOnePokemon(resultStatus);
}

useEffect(()=>{
    getPokemon();
},[])

return(
    <div>
        <br></br>
            <br></br>
            <label htmlFor="" className='textoBusqueda'></label><br></br>
            <select className='select' name="" id="" value={filtroStatus} onChange={handleCargarbyStatus}>
                <option className='opción' value="grass">Grass</option>
                <option className='opción' value="water">Water</option>
                <option className='opción' value="fire">Fire</option>
            </select>
            <br />
            <div className="row">
                {onePokemon.map((val, i) => {
                    return <onePokemon key={i} char={val} />
                })}
            </div>
    </div>
)
}