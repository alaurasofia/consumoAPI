import { useState } from "react";


function Pokedex() {

    const [pokemons, setPokemons] = useState(null)
    const [pesquisa, setPesquisa] = useState([])


    async function buscarNome(nome) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + nome)
        const data = await response.json()
        console.log(data)
        setPokemons(data)
    }




    return (
        <div>

            <div style={{ textAlign: "center" }}>
                <h1>Pokédex</h1>
                <p>Consulte um Pokémon</p>

                <input onChange={e => setPesquisa(e.target.value)} placeholder="Digite o Pokémon" />
                <button onClick={() => buscarNome(pesquisa)}> 🔎 Pesquisar </button>
            </div>

            <hr />

            {
                pokemons == null ?
                <p>Lista Vazia</p>
                :
                <>
                 <h2>Nome: {pokemons.name}</h2>
            <p>Tipo: {pokemons.types[0].type.name}</p>
            <img src={pokemons.sprites.other.showdown.front_default} />
                
                </>
            }

           

        </div>
    );
}

export default Pokedex;